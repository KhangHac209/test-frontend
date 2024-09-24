This is the frontend for the Human Resource Management (HRM) System built using Next.js and TypeScript. It provides an Admin Site for managing employee data and a User Site for employees to access their profiles and submit requests.

## Technologies Used

-   **Framework**: Next.js
-   **Language**: TypeScript
-   **Styling**: Material-UI
-   **State Management**: React Hooks
-   **Data Fetching**: Axios

## Installation

To set up the project locally, follow these steps:

To set up the project locall

1. **Clone the repository**:

````bash
   git clone https://github.com/KhangHac209/test-frontend
   cd test-frontend


2. ** Make sure install Node.js **
    npm install
    npm run dev

## Features

Admin Dashboard:
  - View and manage employee data.

User Dashboard:
  - View personal profiles.

Data Fetching:
  - Employee data is fetched from a placeholder API (`https://jsonplaceholder.typicode.com/users`), which simulates the actual data source for demonstration purposes.

  Advantages:

  - Khám phá thêm được nextjs và typecript.
  - Sử dụng axios để có thể fetch api nhanh hơn.

  Disadvantages:

  - Chưa hoàn thành hết được các chức năng.
  - Chưa hiểu biết sâu về nextjs và typecript.
  - Còn hạn chế về xử lý logic.

  Development Phases
  - Planning:
    - Xác định các yêu cầu của dự án, bao gồm các tính năng cho cả trang tổng quan Quản trị viên và Người dùng.
    - Chọn ngăn xếp công nghệ (Next.js, TypeScript, Material-UI).

  - Setup:
    - Tạo dự án Next.js và cài đặt các phụ thuộc cần thiết.
    - Cấu trúc các thư mục dự án cho pages, components, and styles.

  - Development:
    - Đã triển khai Trang chủ với các liên kết điều hướng đến bảng điều khiển của Quản trị viên và Người dùng.
    - Phát triển Bảng điều khiển dành cho quản trị viên để fetch và hiển thị dữ liệu nhân viên bằng Axios.
    - Tạo Bảng điều khiển người dùng để xem hồ sơ nhân viên dựa trên dữ liệu người dùng đã chọn.


  - My web reactjs basic: https://react-bicycle-pi.vercel.app/


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
````

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
