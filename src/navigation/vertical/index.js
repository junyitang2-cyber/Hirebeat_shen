const navigation = () => {
  return [
    {
      title: 'Home',
      path: '/home',
      icon: 'mdi:home-outline',
      children: [
        {
          title: "Candidates",
          path: '/home/candidates'
        }
      ]
    },
    {
      title: 'Second Page',
      path: '/second-page',
      icon: 'mdi:email-outline',
    },
    {
      title: 'Third Page',
      path: '/third-page',
      icon: 'mdi:email-outline',
      children: [
        {
          title: 'UserProfile',
          path: 'third-page/user'
        },
        {
          title: 'tab',
          path: '/tabs'
        }
      ]
    },
    {
      path: '/acl-page',
      action: 'read',
      subject: 'acl-page',
      title: 'Access Control',
      icon: 'mdi:shield-outline',
    }
  ]
}

export default navigation
