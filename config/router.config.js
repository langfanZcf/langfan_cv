export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', name: 'login', component: './User/Login' },
      { path: '/user/register', name: 'register', component: './User/Register' },
      {
        path: '/user/register-result',
        name: 'register.result',
        component: './User/RegisterResult',
      },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // dashboard
      { path: '/', redirect: '/profile/basic' },
      // forms
      {
        path: '/profile',
        name: 'profile',
        icon: 'profile',
        routes: [
          // profile
          {
            path: '/profile/basic',
            name: 'basic',
            component: './Profile/BasicProfile',
          },
          {
            path: '/profile/work/',
            name: 'work',
            component: './Profile/Work',
          },
          {
            path: '/profile/project/',
            name: 'project',
            component: './Profile/Project',
          },
          {
            path: '/profile/other/',
            name: 'other',
            component: './Profile/Other',
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
