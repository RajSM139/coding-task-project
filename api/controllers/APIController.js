/*
#### TASK 1:
****PAYLOAD****
{
	"username": "Rajesh Mishra",
	"email": "ramesh@gmail.com"
}
*/
const createUser = async(req, res) => {
  try {
    const data = req.body;
    const verifyUserCount = await Users.count(); // This will check the number of Users created Earlier.
    if(verifyUserCount > 0) { // If the user count is greater than 0, it will create an User with Role as TEAM.
      const userCreate = await Users.create(data);
      const userRolePayload = {
        userId: userCreate.id,
        userRole: 'TEAM',
      };
      await User_Roles.create(userRolePayload);
      res.send({success: true, code: 200, message: 'TEAM Account Created'});
    } else { // If the user count is not greater than 0, it will create an User with Role as ADMIN.
      const userCreate = await Users.create(data);
      const userRolePayload = {
        userId: userCreate.id,
        userRole: 'ADMIN',
      };
      await User_Roles.create(userRolePayload);
      res.send({success: true, code: 200, message: 'ADMIN Account Created'});
    }
  } catch(e) {
    console.log(e);
    res.send({code: 400, error: true, message: `API Error: ${e.stack}`});
  }
};

/*
#### TASK 2:
****URL****
e.g.: /api/v1/delete-product-category?catId=2
*/

const disableProductCategory = async(req, res) => {
  try {
    const categoryId = req.param('catId');
    await Categories.update({id: categoryId}, {status: 0});
    const catProducts = await Products.find({catId: categoryId});
    await Products.update({catId: categoryId}, {status: 0});
    res.send({success: true, code: 200, catProducts});
  } catch(e) {
    console.log(e);
    res.send({code: 400, error: true, message: `API Error: ${e.stack}`});
  }
};

const deleteProductCategory = async(req, res) => {
  try {
    const categoryId = req.param('catId');
    await Categories.destroy({id: categoryId});
    const catProducts = await Products.find({catId: categoryId});
    await Products.destroy({catId: categoryId});
    res.send({success: true, code: 200, catProducts});
  } catch(e) {
    console.log(e);
    res.send({code: 400, error: true, message: `API Error: ${e.stack}`});
  }
};

/*
#### TASK 3:
*/

const categoryListings = async(req, res) => {
  try {
    const categories = await Categories.find({status: 1});
    const listing = [];
    for(let i = 0; i < categories.length; i++) {
      const products = await Products.count({catId: categories[i].id, status: 1});
      listing.push({
        category: categories[i].catName,
        productCount: products,
      });
    }
    res.send({success: true, code: 200, listing});
  } catch(e) {
    console.log(e);
    res.send({error: true, code: 400, message: `API Error: ${e.stack}`});
  }
};

/*
#### REQUIRED FOR TASK 3:
*****PAYLOAD*****
{
	"catName": "Cat Name 1",
	"products": [
		{
			"productName": "P 1"
		}, {
			"productName": "P 2"
		}, {
			"productName": "P 3"
		}, {
			"productName": "P 4"
		}]
}
*/

const createProductCategories = async(req, res) => {
  try {
    const data = req.body;
    const catPayload = await Categories.create({catName: data.catName});
    for(let i = 0; i < data.products.length; i++) {
      await Products.create({catId: catPayload.id, productName: data.products[i].productName});
    }
    res.send({success: true, message: 'Success'});
  } catch(e) {
    console.log(e);
    res.send({error: true, code: 400, message: e.stack});
  }
};

module.exports = {
  createUser,
  deleteProductCategory,
  categoryListings,
  disableProductCategory,
  createProductCategories,
};
