export default class Configs {
  static get currentVersion() { return 'Phiên bản: Beta 1.0.0' }
  static get baseUrl() { return 'http://pcdashboard.herokuapp.com' }
  static get homeUrl() { return 'http://www.phys.hcmus.edu.vn/vlth' }
  static get tokenPath() { return '/auth/signin' }
  static get userPath() { return '/user/' }
  static get departmentPath() { return '/post/department' }
  static get classPath() { return '/post/class/' }
  static get commentPath() { return '/comment/' }
  static get changePath() { return '/user/change-password' }
  static get forgetPath() { return '/user/forget-password/' }
  static get schedulePath() { return '/schedule/' }
}