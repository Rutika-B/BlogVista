import React, { useEffect, useState } from "react";
import AppwriteService from "../appwrite/service";
import Container from "../component/container/Container";
import { PostCard } from "../component";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { useSelector } from "react-redux";
import { RotatingLines } from "react-loader-spinner";
import Loader from "../component/Loader";

function Home() {
  const [posts, setPosts] = useState([]);
  const userData = useSelector((state) => state.auth.userData);
 
  useEffect(() => {
    AppwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    }, []);
  });
  if (posts.length === 0 && userData) {
    return (
      <>
      
        <Loader />
      </>
    );
  } else if (userData === null) {
    return (
      <div className="w-full mx-auto my-auto justify-center items-center max-w-5xl">
        <aside className="relative overflow-hidde rounded-lg sm:mx-16 mx-2 sm:py-16">
          <h2 className="text-4xl font-bold sm:text-5xl my-auto py-8">
            BlogVista
          </h2>

          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Empowering Minds, Enriching Lives: Navigate Our Diverse Content Hub",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
          <div className="lg order-2 mt-8 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              width="766.06693"
              height="517"
              viewBox="0 0 766.06693 517"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="M978.03346,618.5h-379a5.00573,5.00573,0,0,1-5-5v-417a5.00573,5.00573,0,0,1,5-5h379a5.00573,5.00573,0,0,1,5,5v417A5.00573,5.00573,0,0,1,978.03346,618.5Zm-379-425a3.00328,3.00328,0,0,0-3,3v417a3.00328,3.00328,0,0,0,3,3h379a3.00328,3.00328,0,0,0,3-3v-417a3.00328,3.00328,0,0,0-3-3Z"
                transform="translate(-216.96654 -191.5)"
                fill="#3f3d56"
              />
              <path
                d="M762.53346,350.5h-94a5.00573,5.00573,0,0,1-5-5v-94a5.00573,5.00573,0,0,1,5-5h94a5.00573,5.00573,0,0,1,5,5v94A5.00573,5.00573,0,0,1,762.53346,350.5Zm-94-102a3.00328,3.00328,0,0,0-3,3v94a3.00328,3.00328,0,0,0,3,3h94a3.00328,3.00328,0,0,0,3-3v-94a3.00328,3.00328,0,0,0-3-3Z"
                transform="translate(-216.96654 -191.5)"
                fill="#f2f2f2"
              />
              <path
                d="M735.53346,362h-94a4.50508,4.50508,0,0,1-4.5-4.5v-94a4.50508,4.50508,0,0,1,4.5-4.5h94a4.50507,4.50507,0,0,1,4.5,4.5v94A4.50507,4.50507,0,0,1,735.53346,362Z"
                transform="translate(-216.96654 -191.5)"
                fill="#0b022d"
              />
              <path
                d="M935.53346,408h-294a4.5,4.5,0,0,1,0-9h294a4.5,4.5,0,1,1,0,9Z"
                transform="translate(-216.96654 -191.5)"
                fill="#ccc"
              />
              <path
                d="M864.53346,439h-223a4.5,4.5,0,0,1,0-9h223a4.5,4.5,0,1,1,0,9Z"
                transform="translate(-216.96654 -191.5)"
                fill="#ccc"
              />
              <path
                d="M934.53346,294h-130a4.5,4.5,0,0,1,0-9h130a4.5,4.5,0,1,1,0,9Z"
                transform="translate(-216.96654 -191.5)"
                fill="#ccc"
              />
              <path
                d="M902.08986,325h-97.5564a4.5,4.5,0,0,1,0-9h97.5564a4.5,4.5,0,0,1,0,9Z"
                transform="translate(-216.96654 -191.5)"
                fill="#ccc"
              />
              <path
                d="M935.53346,470h-294a4.5,4.5,0,0,1,0-9h294a4.5,4.5,0,1,1,0,9Z"
                transform="translate(-216.96654 -191.5)"
                fill="#ccc"
              />
              <path
                d="M864.53346,501h-223a4.5,4.5,0,0,1,0-9h223a4.5,4.5,0,1,1,0,9Z"
                transform="translate(-216.96654 -191.5)"
                fill="#ccc"
              />
              <path
                d="M935.53346,532h-294a4.5,4.5,0,0,1,0-9h294a4.5,4.5,0,1,1,0,9Z"
                transform="translate(-216.96654 -191.5)"
                fill="#ccc"
              />
              <path
                d="M935.53346,563h-294a4.5,4.5,0,0,1,0-9h294a4.5,4.5,0,1,1,0,9Z"
                transform="translate(-216.96654 -191.5)"
                fill="#ccc"
              />
              <path
                d="M698.4626,579.811h-215a5.00573,5.00573,0,0,1-5-5v-133a5.00573,5.00573,0,0,1,5-5h215a5.00573,5.00573,0,0,1,5,5v133A5.00573,5.00573,0,0,1,698.4626,579.811Z"
                transform="translate(-216.96654 -191.5)"
                fill="#fff"
              />
              <path
                d="M698.4626,579.811h-215a5.00573,5.00573,0,0,1-5-5v-133a5.00573,5.00573,0,0,1,5-5h215a5.00573,5.00573,0,0,1,5,5v133A5.00573,5.00573,0,0,1,698.4626,579.811Zm-215-141a3.00328,3.00328,0,0,0-3,3v133a3.00328,3.00328,0,0,0,3,3h215a3.00328,3.00328,0,0,0,3-3v-133a3.00328,3.00328,0,0,0-3-3Z"
                transform="translate(-216.96654 -191.5)"
                fill="#3f3d56"
              />
              <path
                d="M655.9626,497.311h-130a4.5,4.5,0,0,1,0-9h130a4.5,4.5,0,0,1,0,9Z"
                transform="translate(-216.96654 -191.5)"
                fill="#ccc"
              />
              <path
                d="M655.9626,528.311h-130a4.5,4.5,0,0,1,0-9h130a4.5,4.5,0,0,1,0,9Z"
                transform="translate(-216.96654 -191.5)"
                fill="#ccc"
              />
              <polygon
                points="230.335 504.891 242.595 504.891 248.427 457.603 230.333 457.604 230.335 504.891"
                fill="#a0616a"
              />
              <path
                d="M444.17433,692.38852l24.144-.001h.001a15.3873,15.3873,0,0,1,15.38647,15.38623v.5l-39.53076.00146Z"
                transform="translate(-216.96654 -191.5)"
                fill="#2f2e41"
              />
              <polygon
                points="134.876 499.584 146.998 501.416 159.834 455.532 143.943 452.828 134.876 499.584"
                fill="#a0616a"
              />
              <path
                d="M349.3485,686.659l23.8729,3.60829.001.00015a15.3873,15.3873,0,0,1,12.91352,17.51344l-.07474.49438-39.08679-5.90794Z"
                transform="translate(-216.96654 -191.5)"
                fill="#2f2e41"
              />
              <path
                d="M389.64274,462.04316l13.61234,3.56656-.90556,22.06943-.11221,40.18164a8.05269,8.05269,0,1,1-10.65739,1.33914l-4.183-40.32883Z"
                transform="translate(-216.96654 -191.5)"
                fill="#a0616a"
              />
              <path
                d="M387.27321,436.76465a11.112,11.112,0,0,1,6.86914-9.88184,10.38874,10.38874,0,0,1,11.24536,1.8086,9.90512,9.90512,0,0,1,3.30176,7.66015c.03589,12.92871-2.88281,31.77344-2.91235,31.96192l-.04663.2998-19.89673,6.7002Z"
                transform="translate(-216.96654 -191.5)"
                fill="#0b022d"
              />
              <path
                d="M422.84952,473.46457l30.43253-7.87755,14.06747,47.37755.5,176.5-23.27183-.14567-9.72817-142.85433-62,132-25-3,54.5-141.5s-3-25,6.5-37.5l-2-13Z"
                transform="translate(-216.96654 -191.5)"
                fill="#2f2e41"
              />
              <path
                d="M402.32936,485.252a4.66294,4.66294,0,0,1-.99487-3.751l-13.88135-41.64453a10.59476,10.59476,0,0,1,2.92212-11.18262l6.02612-5.47754,4.08374-16.335,23.47144,5.7373-1.93384,7.73535,10.62256-1.93066,22.374,49.832-46.76757,18.69336-2.30323.03613A4.66233,4.66233,0,0,1,402.32936,485.252Z"
                transform="translate(-216.96654 -191.5)"
                fill="#0b022d"
              />
              <path
                d="M434.90714,450.09054l13.41089-4.262,11.03149,19.136L480.73307,498.984a8.0527,8.0527,0,1,1-8.29126,6.82849l-25.09229-31.8479Z"
                transform="translate(-216.96654 -191.5)"
                fill="#a0616a"
              />
              <path
                d="M419.39235,429.99219a11.11077,11.11077,0,0,1,.52344-12.02246,10.39434,10.39434,0,0,1,10.4707-4.48243,9.90544,9.90544,0,0,1,6.885,4.709c6.94092,10.90723,14.54736,28.39453,14.62329,28.56934l.12061.27832L438.78127,463.3418Z"
                transform="translate(-216.96654 -191.5)"
                fill="#0b022d"
              />
              <circle
                cx="200.88438"
                cy="193.67287"
                r="18.64889"
                fill="#a0616a"
              />
              <circle
                cx="167.92773"
                cy="167.84291"
                r="17.96364"
                fill="#2f2e41"
              />
              <path
                d="M369.39969,374.21795a17.96458,17.96458,0,0,0,27.74061-9.43241,17.96463,17.96463,0,1,1-35.04222-7.36674A17.958,17.958,0,0,0,369.39969,374.21795Z"
                transform="translate(-216.96654 -191.5)"
                fill="#2f2e41"
              />
              <path
                d="M440.29212,374.23792c-3.136-5.61432-4.33594-7.95958-8.37942-11.37357-3.57566-3.01934-7.97385-3.906-11.52134-1.04515A21.24492,21.24492,0,1,0,433.21,381.32007a21.42139,21.42139,0,0,0-.14474-2.4022C436.14885,378.48481,437.2085,374.671,440.29212,374.23792Z"
                transform="translate(-216.96654 -191.5)"
                fill="#2f2e41"
              />
              <path
                d="M598.96654,708.5h-381a1,1,0,0,1,0-2h381a1,1,0,0,1,0,2Z"
                transform="translate(-216.96654 -191.5)"
                fill="#ccc"
              />
            </svg>
          </div>
        </aside>
      </div>
    );
  }
  return (
    <div className="w-full py-2">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="w-1/4 p-2">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
