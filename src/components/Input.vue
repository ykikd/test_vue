<template>
  <v-container>
    <v-form ref="form" v-model="valid">
      <v-row>
        <v-col cols="6">
          <v-text-field v-model="kanasei" label="セイ" :rules="[rules.required]"></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="kanamei" label="メイ" :rules="[rules.required]"></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="sei" label="姓" :rules="[rules.required]"></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="mei" label="名" :rules="[rules.required]"></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field v-model="mail" label="メールアドレス" :rules="[rules.required,rules.email]"></v-text-field>
        </v-col>
      </v-row>
      <v-btn :disabled="!valid" class="mr-2" large color="primary" @click="regist">登録</v-btn>
    </v-form>
    <p class="card-text">{{fullname}}</p>
    <p class="card-text">{{inputjson}}</p>
  </v-container>
</template>

<script>
export default {
  name: 'Input',

  data: () => ({
    valid: true,
    kanasei: 'テスト',
    kanamei: 'タロウ',
    sei: '',
    mei: '',
    mail: '',
    fullname: null,
    inputjson: null,
    rules: {
      required: value => !!value || 'Required.',
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Invalid e-mail.'
      }
    }
  }),
  methods: {
    regist: function () {
      let regist = {
        セイ: this.kanasei,
        メイ: this.kanamei,
        姓: this.sei,
        名: this.mei,
        メールアドレス: this.mail
      }
      this.inputjson = JSON.stringify(regist)
      this.fullname = 'こんにちは。' + this.sei + this.mei + 'さん'
    }
  }
}
</script>
