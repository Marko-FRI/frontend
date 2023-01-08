<template>
  <div style="text-align: center">
    <div class="text-h4 q-mb-xl">
      Uredi profil
    </div>
    <div
      class="form-container q-py-lg q-px-xl q-mx-auto"
      style="max-width: 700px;"
    >
      <div
        style="text-align: center"
        class="text-h6 q-mb-md q-mt-xl"
      >
        Profilna slika
      </div>
      <div
        style="display: inline-block; position: relative;"
      >
        <input
          id="poster-file"
          class="aspect-ratio profile-picture-picker rounded-circle"
          name="movie_poster"
          type="file"
          accept="image/*"
          @change="previewFiles"
        >
        <img
          id="profilePicture"
          :src="oldProfileImage"
          class="aspect-ratio rounded-circle profile-picture w-100"
        >
      </div>
      <q-input
        v-model="email"
        label="Email"
        class="q-py-lg"
        disable
      />
      <q-input
        v-model="newName"
        label="Ime"
        class="q-py-lg"
        :disable="loading"
      />
      <q-input
        v-model="newSurname"
        label="Priimek"
        class="q-py-lg"
        :disable="loading"
      />
      <q-input
        v-model="newPassword"
        label="Novo geslo"
        :type="isNewPwd ? 'password' : 'text'"
        class="q-py-lg"
        :disable="loading"
      >
        <template #append>
          <q-icon
            :name="isNewPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isNewPwd = !isNewPwd"
          />
        </template>
      </q-input>
      <q-input
        v-model="newRepeatPassword"
        label="Ponovi novo geslo"
        :type="isNewRepeatPwd ? 'password' : 'text'"
        class="q-py-lg"
        :disable="loading"
      >
        <template #append>
          <q-icon
            :name="isNewRepeatPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isNewRepeatPwd = !isNewRepeatPwd"
          />
        </template>
      </q-input>
      <q-input
        v-model="currentPassword"
        label="Trenutno geslo"
        :type="isCurrPwd ? 'password' : 'text'"
        class="q-py-lg"
        :disable="loading"
      >
        <template #append>
          <q-icon
            :name="isCurrPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isCurrPwd = !isCurrPwd"
          />
        </template>
      </q-input>
      <q-btn
        label="Shrani"
        color="white"
        flat
        no-caps
        style="font-size: 1rem"
        class="bg-positive border-rad"
        :disable="loading"
        @click="checkChanges"
      />
      <p
        v-if="errorMessage.length > 0"
        class="text-red-8 text-h6 q-mt-lg"
      >
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import { api } from 'src/boot/axios'
import { useUserStore } from 'src/stores/UserStore'

export default {
  name: 'ProfileEditProfile',

  props: ['editProfileErrorMessage', 'loadingParent'],

  setup () {
    const userStore = useUserStore()

    return { userStore }
  },

  data () {
    return {
      oldProfileImage: '',
      newProfileImage: '',
      email: 'jan.merhar@gmail.com',
      oldName: 'Jan',
      newName: '',
      oldSurname: 'Merhar',
      newSurname: '',
      newPassword: '',
      isNewPwd: true,
      newRepeatPassword: '',
      isNewRepeatPwd: true,
      currentPassword: '',
      isCurrPwd: true,
      uploadedFile: null,
      errorMessage: '',
      loading: false
    }
  },

  watch: {
    editProfileErrorMessage (newMsg) {
      this.errorMessage = newMsg
    },

    loadingParent (newLoading) {
      this.loading = newLoading
    }
  },

  mounted () {
    if (this.userStore.token === null) { this.$router.push('/') }

    this.oldProfileImage = this.userStore.data.profile_image_path
    this.email = this.userStore.data.email
    this.oldName = this.userStore.data.name
    this.oldSurname = this.userStore.data.surname

    this.newProfileImage = this.oldProfileImage
    this.newName = this.oldName
    this.newSurname = this.oldSurname
  },

  methods: {
    previewFiles (e) {
      const file = e.target.files[0]
      // check if file type is image and if it is, preview the image
      if (file !== undefined && file.type.includes('image')) {
        const profilePicture = document.getElementById('profilePicture')
        const reader = new FileReader()
        reader.onload = (event) => {
          profilePicture.src = event.target.result
          this.uploadedFile = file
        }
        reader.readAsDataURL(file)
      }
    },

    checkChanges () {
      if (this.currentPassword === '') {
        this.errorMessage = 'Potrebno je vpisati trenutno geslo!'
      } else if (this.newPassword !== this.newRepeatPassword) {
        this.errorMessage = 'Nova gesla se ne ujemata!'
      } else if (this.newName === this.oldName && this.newSurname === this.oldSurname && !this.changeInPassword && this.uploadedFile === null) {
        this.errorMessage = 'Ni nobene spremembe v podatkih!'
      } else {
        const newProfileData = {
          currentPassword: this.currentPassword,
          name: this.newName,
          surname: this.newSurname,
          password: this.newPassword,
          image: this.uploadedFile
        }
        this.$emit('changeProfileData', newProfileData)
      }
    },

    async changeInPassword () {
      try {
        this.loading = true
        await api.get('/sanctum/csrf-cookie')
        const reply = await api.post('/checkChangeInPassword', {
          password: this.newPassword,
          password_confirmation: this.newRepeatPassword
        })

        this.errorMessage = ''
        this.loading = false
        // console.log(reply)
        return reply.data.isChanged // to je bool, ali je sprememba
      } catch (error) {
        this.errorMessage = error.response.data.message
        // console.log(error)
        return false
      }
    }
  }
}
</script>

<style scoped>
    .form-container {
        background-color: #F2F2EF;
    }

    .profile-picture {
        border-radius: 50%;
        width: 150px;
        height: 150px;
        cursor: pointer;
    }

    .profile-picture-picker{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        text-indent: -999em;
        outline: none;
        cursor: pointer;
    }

    .profile-picture-picker:hover {
        content: "upload";
        background-color: #121212;
        opacity: 0.5;
        color: white;
    }

    .aspect-ratio {
        aspect-ratio: 1;
        border-radius: 50%;
    }

</style>
