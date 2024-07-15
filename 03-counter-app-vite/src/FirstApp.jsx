import PropTypes from "prop-types";

export const FirstApp = ({ title, subTitle = "Krilin se salvo" }) => {
  // console.log(props);
  return (
    <>
      <h1>{title}</h1>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>{subTitle}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.number,
};
