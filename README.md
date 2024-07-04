# React Ultimate Starter Template
Template này được sử dụng cho series React Ultimate (Vite)

### Môi trường chạy dự án: Node.js v20.14.0
https://nodejs.org/download/release/v20.14.0/

===

Các bước cài đặt: (chế độ development)
1. clone code
2. cài đặt thư viện: npm i
3. Update file .env.development (nếu cần thiết)
4. Chạy dự án: npm run dev

===

Cách chạy tại chế độ production:
1. clone code
2. cài đặt thư viện: npm i
3. Update file .env.production (nếu cần thiết)
4. Build dự án: npm run build
5. Chạy dự án: npm run preview

===

#My Note:
1. Call function on html element
  - <button onClick={handleClick()}>Add</button>: Function được gọi trước khi nhấn click vào button (cách SAI)
  - <button onClick={handleClick}>Add</button>: : Function được gọi sau khi nhấn click vào button (cách ĐÚNG)

  - <input type="text" onChange={(event) => handleOnChange(event.target.value)} />
    => Truyền data cho function thì dùng arrow function