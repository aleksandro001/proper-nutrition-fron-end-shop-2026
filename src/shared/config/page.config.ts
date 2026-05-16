class PageConfig {
  readonly HOME = '/'

  readonly DASHBOARD = '/dashboard'
  readonly MEAL_PLANS = this.DASHBOARD + '/meal-plans'
  readonly NUTRITION = this.DASHBOARD + '/nutrition'
  readonly RECIPES = this.DASHBOARD + '/recipes'
  readonly ANALYTICS = this.DASHBOARD + '/analytics'
  readonly ORDERS_GROCERIES = this.DASHBOARD + '/orders-groceries'
  readonly PROFILE = this.DASHBOARD + '/profile'

  private readonly AUTH = '/auth'
  readonly LOGIN = this.AUTH + '/login'
  readonly REGISTER = this.AUTH + '/register'
  readonly FORGOT_PASSWORD = this.AUTH + '/forgot-password'
}
export const PAGES = new PageConfig()
