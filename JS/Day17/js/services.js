const url = "https://dummyjson.com";
export async function getAll(path) {
	try {
		const res = await fetch(`${url}/${path}`);
		const data = await res.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}

// async function getById(path, id) {
// 	try {
// 		const res = await fetch(`${url}/${path}/${id}`);
// 		const data = await res.json();
// 		return data;
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

export async function getById(path, id) {
	try {
		const res = await fetch(`${url}/${path}/${id}`);
		const data = await res.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}

// export { a };

// let a = 10;

/**
 * Export default:
 * 1. Trong 1 file chỉ có duy nhất 1 biến được export default.
 * 2. Khi export default, import không cần đưa vào dấu "{}"
 * 3. Khi export default, import có thể đổi tên khác (không cần keyword "as")
 * 4. Export default được ưu tiên import đầu tiên nếu import nhiều biến trong cùng một dòng.
 * 5. Export default không đồng thời nằm trong cùng một lệnh gán hoặc khai báo với var, let, const.
 *
 */

/**
 * Khi một file js được module hoá thì có thể sử dụng await ở phạm vi global (chứ không cần nhất thiết phải ở trong async function).
 */
