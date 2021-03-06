const UserModel = require("../../../database/models/User");
const PhotoModel = require("../../../database/models/Photo");

class PhotoTestRepository {

	async createTestUser() {
		await UserModel.create({
			id: "aa98bc1b-22f4-4fc6-be64-3d830068bdqq",
			email: "joao@teste.com",
			password: "$2a$10$qccZ2L8csoUcHQR1mMFkJulToLLZTe7Xo7DnM19dV4Ly3r1OkBg6S",
			verificationToken: "544f818f5f5cd4cde44c611683fc71",
			verifiedEmail: true
		}).catch(err => console.log(err));
	}

	async removePhotoAndUserTest() {
		await PhotoModel.destroy({
			where: {}
		}).catch(err => console.log(err));

		await UserModel.destroy({
			where: {}
		}).catch(err => console.log(err));
	}

	async getPhotoKey() {
		const { key } = await PhotoModel.findOne({
			attributes: ["key"],
			where: {
				userId: "aa98bc1b-22f4-4fc6-be64-3d830068bdqq"
			}
		}).catch(err => console.log(err));

		return key;
	}

	async getIdAndKey() {
		const { dataValues } = await PhotoModel.findOne({
			where: {
				userId: "aa98bc1b-22f4-4fc6-be64-3d830068bdqq"
			}
		}).catch(err => console.log(err));

		return dataValues;
	}
}


module.exports = {
	PhotoTestRepository
};