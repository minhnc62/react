import "./styles.css";
//câu1-----------------------------------------------------------------
//Viết function truyền vào một mảng các số. Tìm ra số lớn thứ hai.
// VD: [1,3,4,6,2] => 4
{
  console.log(" Câu 1 : Tìm ra số lớn thứ hai. [1,3,4,6,2] => 4");
  const arr = [1, 3, 4, 6, 2];
  arr.sort(function (a, b) {
    return a - b;
  });
  console.log("Phần tử lớn nhất : " + arr[arr.length - 1]);
  function number(param) {
    if (param.length < 2) {
      console.log("Không tồn tại phần tử thứ 2");
      return;
    }
    for (let i = param.length - 2; i >= 0; i--) {
      if (param[i] !== param[param.length - 1]) {
        console.log("Phần tử lớn thứ 2 là : " + param[i]);
        return;
      }
    }
    console.log("không tồn tại phần tử lớn thứ 2");
  }
  number(arr);
}
//câu2--------------------------------------------------------------
//Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả
//trả về là 1 mảng các chuỗi có độ dài lớn nhất.
//VD: ["hung", "nam", "linh", "tung", "tu"] => ["hung", "linh", "tung"]
{
  console.log(
    " Câu 2 : trả về là 1 mảng các chuỗi có độ dài lớn nhất ['hung', 'nam', 'linh', 'tung', 'tu'] => ['hung', 'linh', 'tung']"
  );

  let nameArr = ["hung", "nam", "linh", "tung", "tu"];
  let maxString = [];

  function longestString(arr) {
    let tlength = 0;
    for (let i = 0; i < nameArr.length; i++) {
      if (tlength < nameArr[i].length) {
        tlength = nameArr[i].length;
      }
      for (let j = 0; j < nameArr.length; j++) {
        if (nameArr[j].length === tlength) {
          maxString.unshift(nameArr[j]);
        }
      }
      if (maxString.length === 1) {
        return maxString[0];
      } else {
        return maxString;
      }
    }
  }

  console.log(longestString(nameArr));
}
//câu3--------------------------------------------------------------
//Viết function trả về một mảng các số không trùng nhau trong 2 mảng.
// VD [1,2,3], [2,3,4] => [1,4]
{
  console.log(
    " Câu 3 : trả về một mảng các số không trùng nhau trong 2 mảng [1,2,3], [2,3,4] => [1,4]"
  );

  const arr1 = [1, 2, 3];
  const arr2 = [2, 3, 4];
  const difference = Array.from(
    new Set(
      arr1
        .concat(arr2)
        .filter((v) => !new Set(arr1).has(v) || !new Set(arr2).has(v))
    )
  );
  console.log(difference);
}
//câu4--------------------------------------------------------------
//Cho một mảng object users. Viết hàm sắp xếp mảng user tăng dần
//theo age, độ dài của tên
{
  console.log(" Câu 4a : hàm sắp xếp mảng user tăng dần age");
  let users = [
    { name: "cung bui tuan anh", age: 28 },
    { name: "nguyen vu Anh", age: 27 },
    { name: "tran cong Nam", age: 30 },
    { name: "do van Duy", age: 25 }
  ];
  users.sort(function (a, b) {
    return a.age - b.age;
  });
  console.log(users);
  console.log(" Câu 4b : hàm sắp xếp mảng user tăng dần độ dài của tên");
  users.sort(function (a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  console.log(users);

  console.log(
    " Câu 4c : hàm chuyển đổi tất cả chữ cái đầu tiên trong name thành dạng capitalize"
  );
  users.forEach((item) => {
    item.name = item.name
      .split(" ")
      .map(
        (word) =>
          word.charAt(0).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase()
      )
      .join(" ");
  });
  console.log(users);
}

//câu5--------------------------------------------------------------
//Tính tổng của các số trong function sau:
//fn(10,20,"30",undefined, null, false,"react")
{
  console.log(
    " Câu 5 : ính tổng của các số trong function sau fn(10,20,'30',undefined, null, false,'react')"
  );
  let array = [10, 20, "30", undefined, null, false, "react"];

  let sum = function (arr) {
    let a = 0;
    let b = arr.length;
    for (let i = 0; i < b; i++) {
      if (!isNaN(arr[i])) {
        a += arr[i];
      }
    }
    return a;
  };

  console.log(sum(array));
}
