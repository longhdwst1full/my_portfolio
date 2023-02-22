import React, { useEffect, useState } from "react";
import { Link, useMatch, useNavigate, useParams } from "react-router-dom";
import { intance } from "../../api";
const initialState = {
  name: "",
  image: "",
};
export default function ListCategories() {
  const [categories, setCategories] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(initialState);

  const mathPath = useMatch("/admin/user/add");
  const isAddMode = Boolean(mathPath);
  const { id } = useParams();
  const history = useNavigate();

  useEffect(() => {
    intance.get("/skills").then((data) => setCategories(data));
  }, []);

  const handleDelete = async (id) => {
    await intance.delete(`/skills/${id}`);
    const itemCate = categories.filter((item) => item.id !== id);
    setCategories(itemCate);
    alert("Xóa thành công danh mục ", id);
  };
  const handleEdit = (id) => {
    const itemCate = categories.find((item) => item.id === id);
    setForm(itemCate);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isAddMode) {
      await intance.post("/skills", form);
      alert("Thêm thành công");
    }
    if (id && isAddMode == false) {
      await intance.put(`/skills/${id}`, form);
      history("/admin/categories");
      alert("Sửa thành công");
    }

    setForm(initialState);
    setShowForm(false);
    window.location.reload();

  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((pre) => ({ ...pre, [name]: value }));
  };
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {showForm && (
        <form onSubmit={handleSubmit} className="my-10 p-4">
          <h1 className="text-center text-3xl font-semibold">
            {isAddMode ? "Add" : "Edit"} Category
          </h1>
          <div className="grid grid-cols-2 ">
            <div className="mb-3">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Category name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
            <div className="text-center ml-5">
              <img
                src={form.image}
                className="w-[100px] object-cover text-center"
                alt=" "
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="image"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your image
            </label>
            <input
              type="text"
              placeholder="Link ảnh"
              id="image"
              name="image"
              onChange={handleChange}
              value={form.image}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isAddMode ? "Submit" : "Update"}
          </button>
        </form>
      )}

      <h1 className="p-2 text-center font-semibold text-3xl">
        List Categories
      </h1>
      <table className=" text-sm text-left w-2/3 m-auto text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Image
            </th>

            <th scope="col" className="px-6 py-3">
              <Link
                to="/admin/categories/add"
                onClick={() => {
                  setForm(initialState);
                  setShowForm(true);
                }}
                className="hover:text-orange-600 text-blue-600 text-center"
              >
                Add Category
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {categories &&
            categories.map((item) => (
              <tr
                key={item.id}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.name}
                </th>
                <td className="px-6 py-4">
                  <img
                    src={item.image}
                    className="w-[100px] object-cover"
                    alt={item.name}
                  />
                </td>

                <td className="px-6 py-4 flex justify-between">
                  <Link
                    to={`/admin/categories/${item.id}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    onClick={() => {
                      setShowForm(true);
                      handleEdit(item.id);
                    }}
                  >
                    Edit
                  </Link>
                  <button
                    to={`/categories/${item.id}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
