import { IPostBody } from "@/app/lib/data";
import { openNotification } from "@/app/utils/OpenNotification";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Modal,
  Rate,
  TreeSelect,
  Typography,
} from "antd";
import { useForm } from "antd/es/form/Form";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const LeaveReviewModal = ({
  isOpen,
  onSubmitExtra,
  setPostSuccess,
  onClose,
}: {
  isOpen: boolean;
  onSubmitExtra: () => void;
  setPostSuccess: (success: boolean) => void;
  onClose: () => void;
}) => {
  const [form] = useForm();
  const [isClient, setIsClient] = useState(false);
  const [disabled, setIsDisabled] = useState(true);
  const [postSucess, setPostSucess] = useState(false);
  const [refetched, setRefetched] = useState(false);
  const { TextArea } = Input;

  const checkIfFieldsHaveValues = () => {
    // Get the values of specific fields
    const values = form.getFieldsValue(["amenities", "rating", "review"]);

    // Check if any of the specified fields have a 'truthy' value
    const hasValues = Object.keys(values).some((key) => {
      const value = values[key];
      if (Array.isArray(value)) return value.length > 0; // Check if array is not empty
      if (typeof value === "number") return value !== 0; // Check if number is not zero
      if (typeof value === "string") return value.trim() !== ""; // Check if string is not empty
      return !!value; // Fallback for other types
    });

    return hasValues;
  };
  const amenitiesData = [
    { title: "Free Wi-Fi", value: "Free Wi-Fi", key: 0 },
    { title: "School", value: "School", key: 1 },
    { title: "Bank", value: "Bank", key: 2 },
    { title: "Parking Lot", value: "Parking Lot", key: 3 },
    { title: "Night-Life", value: "Night-Life", key: 4 },
    { title: "Child Care", value: "Child Care", key: 5 },
    { title: "Hospitals", value: "Hospitals", key: 6 },
    { title: "Gym", value: "Gym", key: 7 },
    { title: "Pet Store", value: "Pet Store", key: 8 },
    { title: "Security", value: "Security", key: 9 },
    { title: "Church", value: "Church", key: 10 },
    { title: "Adult Homes", value: "Adult Homes", key: 11 },
    { title: "Hotels", value: "Hotels", key: 12 },
    { title: "Lounges", value: "Lounges", key: 13 },
    { title: "Art Gallery", value: "Art Gallery", key: 14 },
  ];
  // const [formData, setFormData] = useState({});

  setPostSuccess(refetched);

  const handleSubmit = async (value: IPostBody) => {
    const formData: IPostBody = value;
    if (formData) {
      try {
        const response = await fetch("http://localhost:3000/api/reviews", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
          setPostSucess((prev) => !prev);
                  openNotification({
                    title: "Success",
                    state: "success",
                    description: "Review successfully added",
                    duration: 4.0,
                  });

        form.resetFields();
        console.log("Data posted successfully");
        console.log("res", response);
      } catch (error) {
          console.error("Error posting data:", error);
                  openNotification({
                    title: "Error",
                    state: "error",
                    description: "error",
                    duration: 6.0,
                  });

      }
    } else {
      return;
    }
    onSubmitExtra();
  };

  useEffect(() => {
    // Define the async function inside the effect
    const fetchReviews = async () => {
      const res = await fetch("http://localhost:3000/api/reviews", {
        next: { revalidate: 5000 },
      });
      const data = await res.json();
      setRefetched((prev) => !prev);
      // setPostSuccess(postSucess)
      console.log("refethed data", data);
    };

    // Call the async function
    fetchReviews();
  }, [postSucess]);
  useEffect(() => {
    setPostSuccess(refetched);
  }, [refetched, setPostSuccess]);

  useEffect(() => {
    setIsClient(true);
  }, []);
    
    useEffect(() => {
    }, [disabled])
    

  if (!isClient) {
    return null; // Render nothing on the server-side
  }
  return (
    <div>
      {ReactDOM.createPortal(
        <Modal
          title="Review Location"
          open={isOpen}
          footer={null}
          onCancel={onClose}
        >
          <Form
            form={form}
            onFinish={handleSubmit}
            layout="vertical"
            onChange={() => {
              setIsDisabled(
                checkIfFieldsHaveValues() &&
                  form.getFieldsError().filter(({ errors }) => errors.length)
                    .length === 0
              );
            }}
          >
            <Typography className="font-medium text-lg">
              Bonny and Clyde Street, Ajao Estate, Lagos
            </Typography>
            <Form.Item
              className="pt-2"
              name="amenities"
              required={true}
              rules={[{ required: true, message: "Please select amenities" }]}
            >
              <TreeSelect
                placeholder="Select Amenities"
                allowClear={true}
                treeCheckable={true}
                treeData={amenitiesData}
              />
            </Form.Item>
            <Form.Item
              label="Rate Location"
              name="rating"
              required={true}
              rules={[{ required: true, message: "Please rate location" }]}
            >
              <Rate />
            </Form.Item>
            <Form.Item
              label="Write Review"
              name="review"
              required={true}
              rules={[{ required: true, message: "Please input your review" }]}
            >
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item name="anonymous" valuePropName="checked">
              <Checkbox> Post Anonymous</Checkbox>
            </Form.Item>
            <div className="w-full flex justify-between gap-4">
              <Form.Item className="flex-grow">
                <Button
                  type="primary"
                  className="w-full grid"
                  htmlType="submit"
                  disabled={
                    false
                    // form.getFieldsError().filter(({ errors }) => errors.length)
                    //   .length > 0 &&
                    // form.getFieldsValue(["amenities", "rating", "review"])
                    // !form.isFieldsTouched(['amenities','rating','review'],true) ||
                    // !!form
                    //   .getFieldsError()
                    //   .filter(({ errors }) => errors.length).length
                  }
                >
                  SUBMIT
                </Button>
              </Form.Item>
              <Button
                className="flex-grow text-[var(--primary-color)] border[var(--primary-color)]"
                onClick={() => form.resetFields()}
              >
                CANCEL
              </Button>
            </div>
          </Form>
        </Modal>,
        document.body
      )}
    </div>
  );
};

export default LeaveReviewModal;
