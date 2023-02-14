import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ENDPOINT } from "../../const";
import { getWithToken } from "../../token";
import BuildsItem from "../BuildsItem/BuildsItem";

function BuildsList() {
  const builds = [1, 2, 3, 4, 5];
  const {heroID} = useParams();


console.log(heroID)
 

  useEffect(() => {
    getWithToken(`${ENDPOINT}/build/${heroID}`)
      .then(({ data }) => {
        console.log(data);
      })
      .catch(() => {
        console.log("something has gone terribly wrong");
      });
  }, []);

  return (
    <ul className="builds-list">
      {builds.map((build, key) => (
        <li key={key} className="builds-list__item">
          <BuildsItem build={build} />

          <button
            className="builds-list__item-button button"
            type="button"
          >
            Delete Build
          </button>
        </li>
      ))}
    </ul>
  );
}

export default BuildsList;