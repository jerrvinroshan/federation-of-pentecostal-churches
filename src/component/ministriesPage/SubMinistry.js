import { useState } from "react";
import {BlogPost} from "./BlogPost";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const SubMinistry = ({ ministry }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  if (selectedPost) {
    return <BlogPost post={selectedPost} />;
  }

  return (
    <>
      <Header
        src={ministry.image}
        Header={ministry.ministryName}
        firstPara={ministry.para1}
        secondPara={ministry.para2}
      />
      <div className="Subministry__Container">
        {ministry.subMinistries.map((post) => (
          <div key={post.id} className="Blog__Description">
            <img className="Blog__Img" src={post.image} alt={post.alt}/>
            <div className="Blog__ContentContainer">
              <div className="Blog__ContentHeading">
                <h3 className="Blog--h2">{post.title}</h3>
                <p className="Blog--p">{post.description}</p>
              </div>
              <button className="Blog__Btn" onClick={() => setSelectedPost(post)}>Read more</button>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
};


