import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Users() {
  const { id } = useParams();

  const [user, setUser] = useState([]);

  useEffect(() => {
    console.log(id);
    axios.get(`http://localhost:3001/users/${id}`).then((res) => {
      const { data } = res;
      // console.log(res.data.data);
      let resoult = data.data.map(function (list, index, array) {
        // console.log(list);
        return list;
        // 依據UI需要轉換欄位名稱
        // return {id: list.ID, name: list.USER_ID, location: list.LOCATION_ID, type: list.TYPE};
      });
      console.log(resoult);

      setUser(resoult);
      // console.log(user[0].NAME);
      // console.log(user[0].FULL_NAME);
      // console.log(user[0].COMMENT);
    });
  }, [id]);

  console.log(user);
  console.log("Return:");
  return (
    <>
      <div className="h-full w-full flex flex-col mt-32 justify-center items-center">
        <Link
          to={`/`}
          className="hover:bg-teal-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border mt-8 hover:text-teal-200 text-teal-600 border-zinc-400 py-4 px-4 pl-4"
        >
          Back To Home
        </Link>
        {user[0] && (
          <div className="w-[700px] h-[200] px-6 py-4 flex shadow-xl rounded-xl justify-center items-center bg-teal-600 mt-16 border-teal-800 border-2">
            <div className="w-5/12 flex flex-col space-y-4">
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Name
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Email
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Phone
              </h2>
            </div>
            <div className="w-7/12 flex flex-col space-y-4  ">
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {user[0].NAME}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {user[0].FULL_NAME}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {user[0].COMMENT}
              </h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Users;
