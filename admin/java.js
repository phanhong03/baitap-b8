let rooms = [
  ];
  
  function displayRooms() {
    const tableBody = document.getElementById("roomData");
    tableBody.innerHTML = "";
  
    rooms.forEach((room, index) => {
      const row = `<tr>
              <td>${room.type}</td>
              <td>${room.roomCode}</td>
              <td>${room.name}</td>
              <td><img src="${room.image}" alt="${room.type}" style="width: 100px; height: 100px;"></td>
              <td>${room.price.toLocaleString('vi-VN')} VND</td>
              <td>
                  <button class="btn-edit" onclick="editRoom(${index})">Sửa</button>
                  <button class="btn-delete"onclick="deleteRoom(${index})">Xóa</button></td>
            </tr>`;
      tableBody.innerHTML += row;
    });
  }
  
  const form = document.getElementById("roomForm");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const type = document.getElementById("type").value;
    const roomCode = document.getElementById("roomCode").value;
    const name = document.getElementById("name").value;
  
    const image = document.getElementById("image").value;
    const price = document.getElementById("price").value;
    rooms.push({ type, roomCode, name: "", image, price });
    displayRooms();
    form.reset();
  });
  
  function editRoom(index) {
    const newType = prompt("Nhập loại phòng mới:", rooms[index].type);
    const newRoomCode = prompt("Nhập mã phòng mới:", rooms[index].roomCode);
    const newName = prompt("Nhập tên phòng mới:", rooms[index].name);
    const newImage = prompt("Nhập URL hình ảnh mới:", rooms[index].image);
    const newPrice = prompt("Nhập mức giá mới:", rooms[index].price);
    if (newType && newRoomCode && newName && newImage && newPrice) {
      rooms[index] = { type: newType, roomCode: newRoomCode, name: newName, image: newImage, price: newPrice };
      displayRooms();
    }
  }
  
  
  function deleteRoom(index) {
    const confirmation = confirm("Bạn có chắc chắn muốn xóa?");
    if (confirmation) {
    rooms.splice(index, 1);
    displayRooms();
    }
    }
  
  
  displayRooms();