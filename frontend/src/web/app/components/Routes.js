import * as pages from '../pages/index'

const {
   App,
   HomePage,
   UserPage
} = pages;

var transitionHandler = function(transition) {
   if (process.env.BROWSER) {
      window.scrollTo(0, 0);
   }
}

export default {

   childRoutes: [

      {
         path: '/',
         component: App,

         indexRoute: { component: HomePage, onEnter: transitionHandler },
         childRoutes: [
            {
               path: '/user(/:token)', component: UserPage, onEnter: transitionHandler
            }
         ]
      }

   ]
}