import { Footer } from "../Footer";

const BlogPost = ({ post }) => {
  return (
    <>
      <div className="BlogPost__Container">
        <div className="BlogPost__Heading">
          <img className="BlogPost__Img" src={post.image} />
          <h2 className="BlogPost__Heading">{post.title}</h2>
        </div>
        <div className="Blog__Content">
          {post.content.map((item, index) => {
            if (item.type === "text") {
              return (
                <p className="Blog__Content--p" key={index}>
                  {item.value}
                </p>
              );
            } else if (item.type === "list") {
              return (
                <ul className="Blog__Content--ul" key={index}>
                  {item.value.map((listItem, i) => (
                    <li className="Blog__Content--p" key={i}>
                      {listItem}
                    </li>
                  ))}
                </ul>
              );
            } else if (item.type === "image") {
              return (
                <img
                  key={index}
                  src={item.value}
                  alt="Blog"
                  className="Blog__Image"
                />
              );
            }
            return null;
          })}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default BlogPost;
