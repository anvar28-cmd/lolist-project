function BuildsItem({build}) {
  return (
    <figure className="builds-item">
      <figcaption className="builds-item__name">{build.description}</figcaption>

      <div className="builds-item__inner">
        <ol className="builds-item__cards">
          <li className="builds-item__card">
            <img 
              className="builds-item__card-image" 
              src={build.i1_image}
              width={48}
              height={48}
              alt={build.i1_name}
            />
            <p className="builds-item__card-name">{build.i1_name}</p>
          </li>
          <li className="builds-item__card">
            <img 
              className="builds-item__card-image" 
              src={build.i2_image}
              width={48}
              height={48}
              alt={build.i2_name}
            />
            <p className="builds-item__card-name">{build.i2_name}</p>
          </li>
          <li className="builds-item__card">
            <img 
              className="builds-item__card-image" 
              src={build.i3_image}
              width={48}
              height={48}
              alt={build.i3_name}
            />
            <p className="builds-item__card-name">{build.i3_name}</p>
          </li>
          <li className="builds-item__card">
            <img 
              className="builds-item__card-image" 
              src={build.i4_image}
              width={48}
              height={48}
              alt={build.i4_name}
            />
            <p className="builds-item__card-name">{build.i4_name}</p>
          </li>
          <li className="builds-item__card">
            <img 
              className="builds-item__card-image" 
              src={build.i5_image}
              width={48}
              height={48}
              alt={build.i5_name}
            />
            <p className="builds-item__card-name">{build.i4_name}</p>
          </li>
          <li className="builds-item__card">
            <img 
              className="builds-item__card-image" 
              src={build.i6_image}
              width={48}
              height={48}
              alt={build.i6_name}
            />
            <p className="builds-item__card-name">{build.i6_name}</p>
          </li>
        </ol>

        <ol className="builds-item__cards">
          <li className="builds-item__card">
            <img 
              className="builds-item__card-image" 
              src={build.s1_image}
              width={48}
              height={48}
              alt={build.s1_name}
            />
            <p className="builds-item__card-name">{build.s1_name}</p>
          </li>
          <li className="builds-item__card">
            <img 
              className="builds-item__card-image" 
              src={build.s2_image}
              width={48}
              height={48}
              alt={build.s2_name}
            />
            <p className="builds-item__card-name">{build.s2_name}</p>
          </li>
        </ol>
      </div>
    </figure>
  );
}

export default BuildsItem;