import {Button} from "antd";

export default function CryptoDashboard() {
  return (
    <div className="grid gap-8 grid-cols-12">
      <div className="col-span-full sm:col-span-6 xl:col-span-3">
        {"Hello World!!!"}
      </div>
      <div><Button type="primary" >{"Logout"}</Button></div>
      
    </div>
  );
}
