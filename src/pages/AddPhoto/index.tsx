import { ImageUploadItem, ImageUploader, NavBar } from "antd-mobile";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { demoSrc, mockUpload } from "../../utils/utils";


const AddPhoto = () => {
  const navigate = useNavigate()

  //取消发布返回首页
  const back = () => {
    navigate('/home')
  }

  // 自定义大小
const CustomeSize: FC = () => {
  const [fileList, setFileList] = useState<ImageUploadItem[]>([
    {
      url: demoSrc,
    },
  ])

  return (
    <ImageUploader
      style={{ '--cell-size': '90px' }}
      value={fileList}
      onChange={setFileList}
      upload={mockUpload}
    />
  )
}

  return (
    <div className="addphoto">
      <div className="HD">
        <NavBar back='取消' onBack={back}>
          发布内容
        </NavBar>
      </div>
      <div>
      <CustomeSize />
      </div>
    </div>
  );
}

export default AddPhoto;