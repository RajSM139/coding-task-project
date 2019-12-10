/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  // TASK 1: Create an User with UserRole as Admin, if first user.
  'post /api/v1/create-user': 'APIController.createUser',
  // TASK 2: Delete all the Products related to a Category, when a Category is Deleted.
  // 2.i: Completely Delete the Data from the Database
  'get /api/v1/delete-product-category': 'APIController.deleteProductCategory',
  // 2.ii: Change status of the Data from the Database
  'get /api/v1/disable-product-category': 'APIController.disableProductCategory',
  // TASK 3: Show the number of Products associated with each Category.
  'get /api/v1/get-category-listings': 'APIController.categoryListings',
  'post /api/v1/create-product-categories': 'APIController.createProductCategories',
};
