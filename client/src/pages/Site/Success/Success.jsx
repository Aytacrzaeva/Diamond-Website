import { Button, Result } from "antd";
import { Link } from "react-router-dom";

const Success = () => {

 

  return (
    <div className="success-page">
      <div className="container">
        <Result
          status="success"
          title="Ödəniş tamamlıandı!"
          subTitle="Sifarişiniz  tamamlandı"
          extra={[
            <Link to={"/"} key="home">
              <Button type="success">Home</Button>,
            </Link>,

            <Link to={"/orders"}><Button  key="buy">Sifariş</Button></Link>,
          ]}
        />
      </div>
    </div>
  );
};

export default Success;