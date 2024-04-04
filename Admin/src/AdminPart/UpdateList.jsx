import React, { useEffect, useState } from "react";
import Navbar from "../Components/NavbarAdmin.jsx";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const UpdateList = () => {
  const { idprod } = useParams();
  const [data, setData] = useState([]);
  const [newphoto, setNewPhoto] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/saler/getproduct/${idprod}`)
      .then((results) => {
        setData(results.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updatephoto = async (image) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "AmineTessiku");
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/du0wpkjrs/upload",
        formData
      );
      console.log(response.data.secure_url);
      return response.data.secure_url;
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
    }
  };

  const notifySuccess = () => toast.success("Product added successfully!");
  console.log("product ", data);

  const [firstname, setFirstName] = useState(data.firstname);
  const [lastName, setLastName] = useState(data.lastName);
  const [email, setEmail] = useState(data.email);
  const [phonenumber, setPhoneNumber] = useState(data.phonenumber);
  const [password, setPassword] = useState(data.password);
  const [image, setImage] = useState(data.image);
  const [description, setDiscription] = useState(data.description);


  const updateprodnew = async () => {
    try {
      const updatepho = await updatephoto(newphoto);
      console.log(updatepho);
  
      const newProf = {
        firstname: firstname,
        lastName: lastName,
        email: email,
        phonenumber: phonenumber,
        password: password,
        image: image,
      }
      axios.put(`http://localhost:3000/saler/update/${idprod}`, newProf)
        .then(() => {
          console.log("data inserted !");
          notifySuccess();
        })
        .catch((err) => {
          console.log("err in insert data from the frontend", err);
        });
    } catch (err) {
      console.log("err in update product in front !", err);
    }
  };

  return (
    <div>
      <div>
        <Navbar />
        <ToastContainer />
      </div>
      <div className="w-full h-full  font-semibold ml-36 mt-8 ">
        <p>
          Welcome! <span className="text-red-500">MR Achref</span>
        </p>
      </div>

      <div class="flex items-center justify-center p-12 text-center font-semibold ml-36 mt-3">
        <div class="mx-auto w-full max-w-[550px] bg-white ">
          <div class="">
            <label
              for="email"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              <span className="text-red-500">Professional</span> Firstname
            </label>
            <input
              onChange={(ele) => {
                setFirstName(ele.target.value);
              }}
              name="email"
              id="email"
              type="text" 
              placeholder={data.name}
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            <div class="mb-5">
              <label
                for="text"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                <span className="text-red-500">Professional</span> Lastname
              </label>
              <input
                onChange={(ele) => {
                  setLastName(ele.target.value);
                }}
                type="text" 
                name="text"
                placeholder={data.category}
                class="w-full  rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div class="mb-5">
            <label
              for="email"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              <span className="text-red-500">Professional</span> E-mail
            </label>
            <input
              onChange={(ele) => {
                setEmail(ele.target.value);
              }}
              type="email"
              placeholder={data.email}
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="number"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              <span className="text-red-500">Professional</span> Phone number
            </label>
            <input
              onChange={(ele) => {
                setPhoneNumber(ele.target.value);
              }}
              type="number" 
              
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="email"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              <span className="text-red-500">Professional</span> Password
            </label>
            <input
              onChange={(ele) => {
                setPassword(ele.target.value);
              }}
              type="password" 
              placeholder={data.currentPrice}
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="email"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
            </label>
            
          </div>
        </div>
        <div class="mx-auto w-full max-w-[550px] bg-white ">
          <div class="mb-5">
            <label
              for="email"
              class="mb-4 block text-base font-medium text-[#07074D]"
            >
              <span className="text-red-500">Description</span>
            </label>
            <input
              onChange={(ele) => {
                setDiscription(ele.target.value);
              }}
              type="text"
              placeholder={data.description}
              class="w-full h-40  text-center rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div class="mb-6 pt-4">
            <label class="mb-5 block text-xl font-semibold text-[#07074D]">
              Upload File
            </label>

            <div class="mb-8">
              <input
                type="file"
                name="file"
                id="file"
                class="sr-only"
                onChange={(ele) => {
                  setNewPhoto(ele.target.files[0])
                  updatephoto(ele.target.files[0]);
                }}
              />
              <label
                for="file"
                class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
              >
                <div>
                  {/* <Cloudinary setImageUrls={setImageUrls} /> */}

                  <span class="mb-2 block text-xl font-semibold text-[#07074D]"></span>
                  <span class="mb-2 block text-base font-medium text-[#6B7280]">
                    Or
                  </span>
                  <span class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                    Browse
                  </span>
                </div>
              </label>
            </div>

            <div>
              <button
                onClick={() => {
                  updateprodnew();
                }}
                class="hover:shadow-div w-full rounded-md bg-rose-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Add The New Professional
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
      </div>
    </div>
  );
 };

export default UpdateList;
