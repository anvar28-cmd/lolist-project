import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ENDPOINT } from "../../const";
import { getWithToken } from "../../token";
import BuildsItem from "../BuildsItem/BuildsItem";

function BuildsList() {
  const params = useParams();
  const heroID = params.heroID
  const [builds, setBuilds] = useState();

  // console.log(heroID)
  //  const number = builds.length

  useEffect(() => {
    getWithToken(`${ENDPOINT}/build/${heroID}`)
      .then(({ data }) => {
        setBuilds(data);
      })
      .catch(() => {
        console.log("something has gone terribly wrong");
      });
  }, [heroID]);

  return (
    <ul className="builds-list">
      {builds?.map((build, key) => (
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