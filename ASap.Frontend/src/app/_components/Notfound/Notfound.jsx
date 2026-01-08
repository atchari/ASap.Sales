import { ASSET_IMAGES } from "@/_utilities/paths";
import { Button, Image, Input } from "antd";

const Notfound = () => {
  return (
    <div className="flex-1 flex-wrap flex flex-col items-center justify-center text-center min-h-screen p-6">
      <div className="max-w-96 mb-6">
        <Image
          src={`${ASSET_IMAGES}/undraw_page_not_found.svg`}
          alt="404"
          preview={false}
        />
      </div>
      <div className="mb-4">Oops, an error has occurred. Page not found!</div>
      <div className="w-full  max-w-[400px] mb-4">
        <Input.Search placeholder="Search..." size="large" />
      </div>

      <Button type="primary" size="large" href={"/dashboards/crypto"}>
        Go to home
      </Button>
    </div>
  );
};

export { Notfound };
