// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  devServer: {
    host: 'vihant2fl.test'
  },

  modules: ['nuxt-fortify', '@nuxtjs/tailwindcss'],

  nuxtFortify: {
    baseUrl: 'http://vihant2fl.test',
    origin: 'http://vihant2fl.test:3000',
    authMode: 'cookie',
    authHome: '/dashboard',
    features: {
      registration: true,
      resetPasswords: true,
      emailVerification: true,
      twoFactorAuthentication: true,
      updatePasswords: true,
    },
    endpoints: {
      csrf: '/sanctum/csrf-cookie',
      login: '/login',
      logout: '/logout',
      user: '/api/user',
      tfa: {
        enable: '/user/two-factor-authentication',
        disable: '/user/two-factor-authentication',
        code: '/user/two-factor-qr-code',
        recoveryCode: '/user/two-factor-recovery-codes',
        challenge: '/two-factor-challenge',
        confirm: '/user/confirmed-two-factor-authentication',
      },
      register: '/register',
      resetPassword: '/forgot-password',
      updatePassword: '/reset-password',
      confirmPassword: '/user/confirm-password',
      resendEmailVerificationLink: '/email/verification-notification',
    },
  },
})