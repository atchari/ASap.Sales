import { LAYOUTS } from "@/_layouts";
import { ASSET_IMAGES } from "@/_utilities/paths";
import {
  App,
  Button,
  Card,
  Divider,
  Form,
  Image,
  Input,
  theme,
  Typography,
} from "antd";
import { AiFillApple } from "react-icons/ai";
import { FaPaypal } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RiMastercardFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { currentYear } from "../../_utilities/data";
import { useAppLayout } from "../AppLayout/hooks";
import { useAuth } from "../AuthProvider/hooks";

const { useToken } = theme;
export const LoginForm1 = () => {
  const { token } = useToken();
  const { loading, login } = useAuth();
  const { message } = App.useApp();
  const navigate = useNavigate();
  const { setActiveLayout } = useAppLayout();
  async function handleLogin(formData) {
    const res = await login({
      email: formData.email,
      password: formData.password,
    });
    if (res) {
      setActiveLayout(LAYOUTS.DEFAULT);
      return navigate("/dashboards/crypto");
    } else {
      message.warning("email or password invalid!");
    }
  }

  return (
    <div className="grid grid-cols-12 gap-6 w-full min-h-screen p-4">
      <div className="col-span-12 lg:col-span-6 flex justify-center">
        <div className="flex flex-col justify-around w-[640px] max-w-full p-4 lg:p-8 min-h-full">
          <div className="mb-8">
            <Link to={"#"}>
              <Image
                src={`${ASSET_IMAGES}/logo.png`}
                alt="wieldy-logo"
                className="w-[90px]"
                preview={false}
              />
            </Link>
          </div>
          <div className="mb-4">
            <div className="mb-10">
              <div
                className="text-4xl font-semibold mb-2.5"
                style={{
                  color: token.colorTextHeading,
                }}
              >
                Signin
              </div>
              <Typography.Text>Continue where you left off</Typography.Text>
            </div>
            <div className="flex max-sm:flex-col sm:items-center gap-3 mb-6">
              <Button
                className="flex-1"
                icon={<FcGoogle fontSize={24} />}
                size="large"
              >
                Login with Google
              </Button>
              <Button
                className="flex-1"
                icon={<AiFillApple fontSize={24} />}
                size="large"
              >
                Login with Apple
              </Button>
            </div>
            <Divider className="mb-6" plain>
              or
            </Divider>
            <Form
              layout="vertical"
              className="mb-10"
              onFinish={handleLogin}
              initialValues={{
                email: "demo@example.com",
                password: "zab#723",
              }}
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input placeholder="Email" size="large" />
              </Form.Item>
              <Form.Item
                className="mb-2"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input placeholder="Password" size="large" />
              </Form.Item>
              <Link
                className="block underline mb-5"
                to={"/auth/forgot-password"}
              >
                Forgot password?
              </Link>
              <Form.Item>
                <Button
                  block
                  type="primary"
                  htmlType="submit"
                  size="large"
                  loading={loading}
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
            <Typography.Text>
              Do not have an account yet?{" "}
              <Link to={"/auth/signup-1"}>Create New Account</Link>
            </Typography.Text>
          </div>
          <div>
            <Typography.Text>{`Copyright Company Name © ${currentYear}`}</Typography.Text>
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-6">
        <Card
          style={{ backgroundColor: token.colorPrimary }}
          className="h-full"
          classNames={{
            body: "p-8 text-white max-w-[700px] mx-auto flex flex-col justify-between h-full",
          }}
          bordered={false}
        >
          <div className="mb-5">
            <Typography.Title className="text-white text-3xl lg:text-4xl font-light">
              The simplest way to build your projects with ReactJS and AntD
            </Typography.Title>
            <Typography.Text className="text-white text-base lg:text-2xl font-light">
              We aim to save 50% of your time and cost
            </Typography.Text>
          </div>
          <div className="mb-5">
            <img src="/assets/images/signIn/sign1.png" alt="signIn-img" />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xl">
              <RiMastercardFill fontSize={20} />
              <span>Mastercard</span>
            </div>
            <div className="flex items-center gap-2 text-xl">
              <FaPaypal fontSize={20} />
              <span>PayPal</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
