import React from "react";
import brasil from "../assets/country/brasil.jpg";
import mexico from "../assets/country/mexico.jpg";
import argentina from "../assets/country/argentina.jpg";
import chile from "../assets/country/chile.jpg";
import peru from "../assets/country/peru.jpg";
import uruguay from "../assets/country/uruguay.jpg";
import venezuela from "../assets/country/venezuela.jpg";
import colombia from "../assets/country/colombia.jpg";

const UsersList = ({ users, loading }) => {
  console.log(users)
  return (
    <div className="flex items-center text-white flex-col">
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto flex flex-col items-center px-4 py-10 text-center md:py-16 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            Usuarios
            <span className="dark:text-gray-500"> registrados.</span>
          </h1>
        </div>
      </section>
      <div>
        {!loading ? (
          <div className="flex items-center justify-center flex-wrap gap-10 mx-5">
            {users.map((item) => {
              let src;

              if (item.country_of_origin === "brasil") {
                src = brasil;
              } else if (item.country_of_origin === "mexico") {
                src = mexico;
              } else if (item.country_of_origin === "argentina") {
                src = argentina;
              } else if (item.country_of_origin === "chile") {
                src = chile;
              } else if (item.country_of_origin === "peru") {
                src = peru;
              } else if (item.country_of_origin === "colombia") {
                src = colombia;
              } else if (item.country_of_origin === "uruguay") {
                src = uruguay;
              } else if (item.country_of_origin === "venezuela") {
                src = venezuela;
              }
              return (
                <div className=" w-auto rounded-md shadow-md h-auto dark:bg-gray-900 dark:text-gray-100">
                  <img
                    src={src}
                    alt={item.country_of_origin}
                    className="object-fill w-full h-40 rounded-t-md dark:bg-gray-500"
                  />
                  <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                      <p className="text-3xl font-semibold tracking-wide">
                        {item.full_name}
                      </p>
                      <p className="dark:text-gray-100">
                        Fecha de nacimiento: {item.birth_date}
                      </p>
                      <p className="dark:text-gray-100">Email: {item.email}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-white"></div>
        )}
      </div>
    </div>
  );
};

export default UsersList;
