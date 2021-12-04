const quest = [
    // 68
    "Giải thuật/Thuật toán là gì?",
    "So sánh việc trình bày giải thuật bằng pseudo-code và flowchart?",
    "Tại sao lại cần trình bày giải thuật trước khi bắt tay vào code?",
    "Tại sao lại nên sử dụng flowchart hơn pseudo-code khi thể hiện giải thuật của bài toán phức tạp?",
    "Tại sao giải thuật lại cần hữu hạn các bước thực thi?",
    "Trình bày ý nghĩa các ký hiệu sử dụng khi vẽ flowchart?",
    "Bạn biết gì về VCS – Version Control System (hệ thống quản lý phiên bản)?",
    "Phân biệt hệ thống quản lý mã nguồn tập trung và hệ thống quản lý mã nguồn phân tán?",
    "Git là gì? Tại sao cần sử dụng git?",
    "Git thuộc hệ thống quản  lý mã nguồn tập trung hay phân tán?",
    "Repository là gì? Phân biệt LocalRepository và RemoteRepository?",
    "Đồng bộ giữa các repository (local và remote) để làm gì?",
    "Thao tác push của git để làm gì? Cú pháp câu lệnh?",
    "Thao tác pull của git để làm gì?",
    "Thao tác clone của git để làm gì? Cú pháp câu lệnh?",
    "www là gì?",
    "HTML là gì?",
    "Nêu tên các thẻ làm việc với văn bản trong tài liệu html?",
    "Thẻ div dùng để làm gì? div khác gì span",
    "URL là gì? Phân biệt url tuyệt đối và url tương đối? ",
    "Siêu liên kết là gì? ",
    "Muốn liên kết đến một phần trên cùng trang thì làm thế nào?",
    "Muốn liên kết đến một phần trên trang khác thì làm thế nào?",
    "Phân biệt internal link và external link?",
    "Có mấy loại danh sách? ",
    "Muốn hiển thị danh sách có thứ tự bắt đầu C. D. E… thì làm thế nào?",
    "Form hay biểu mẫu dùng để làm gì?",
    "Thuộc tính action của form dùng để làm gì?",
    "Phân biệt 2 method là get và post?",
    "Phân biệt các nút bấm có type là: button, submit, reset?   ",
    "Muốn submit form đến trang CodeGym.vn thì làm thế nào?",
    "Nếu muốn nối 3 ô trên cùng 1 hàng thì làm thế nào?",
    "Nếu muốn nối 2 ô trên cùng 1 cột thì làm thế nào?",
    "Phân biệt thuộc tính cellpadding và thuộc tính cellspacing?",
    "Trình bày các cách nhúng javascript vào 1 tài liệu html?",
    "Phát biểu: “JavaScript là một ngôn ngữ script dựa trên đối tượng nhằm phát triển các ứng dụng Internet dựa trên client và server”  là đúng hay sai? Giải thích?",
    "Phát biểu “JavaScript phân biệt chữ hoa chữ thường ” đúng hay sai?",
    "Biến là gì? Phân biệt biến cục bộ (local) và biến toàn cục (global)?",
    "Phân biệt: var, let, const?",
    "Nêu tên các kiểu dữ liệu nguyên thủy trong JavaScript?",
    "Trình bày các cách đưa thông báo trong JavaScript? ",
    "Trình bày về các loại toán tử trong JavaScript?",
    "Phân biệt giữa 2 toán tử == và ===?",
    "Phân biệt giữa 2 toán tử && và || trong JavaScript?",
    "Kết quả biểu thức +0===-0 là true hay false?",
    "Trình bày về toán tử ++,-- và – trong JavaScript?",
    "Phân biệt ++a và a++?",
    "Câu lệnh điều kiện/rẽ nhánh là gì?",
    "Có những loại câu lệnh điều kiện nào?",
    "Trình bày về câu lệnh if?",
    "Trình bày về câu lệnh switch?",
    "Tại sao lại nói else là một tùy chọn (optional) của câu lệnh if?",
    "Khi nào nên sử dụng câu lệnh switch?",
    "Câu lệnh break dùng để làm gì? Nếu một case mà không có break thì chương trình chạy thế nào?",
    "Mệnh đề default có bắt buộc trong câu lệnh switch?",
    "Trình bày về toán tử 3 ngôi?",
    "Trình bày về sự kiện và trình quản lý sự kiện trong javascript?",
    "Sự kiện onchange phát sinh khi nào?",
    "Sự kiện onclick phát sinh khi nào? ",
    "Muốn hiển thị 1 hộp thoại xác nhận “Bạn chắc chắn xóa không?” với người dùng khi bấm vào nút delete thì làm thế nào?",
    "Phân biệt onmousevover và onmouseout, onmousemove?",
    "Phân biệt onkeyup, onkeydown và onkeypress?",
    "Phân biệt onfocus và onblur?",
    "Sự kiện onload phát sinh khi nào?",
    "Phân biệt innerHTML và innerText?",
    "Nếu muốn vô hiệu hóa (disabled) một button khi click vào 1 checkbox thì làm thế nào?",
    "Phân biệt thuộc tính readonly và disabled của html? //",
    "Vòng lặp là gì?",
    "Nêu các loại vòng lặp cơ bản trong JavaScript?",
    "Phân biệt vòng lặp for,while,do…while?",
    "Khi nào nên sử dụng vòng lặp do…while?",
    "Khi nào nên sử dụng vòng lặp for?",
    "Khi nào nên sử dụng vòng lặp while?",
    "Trình bày về cách chạy của vòng for lồng nhau?",
    "Phân biệt giữa câu lệnh break và continue?",
    "Mảng là gì?",
    "Trình bày cú pháp khai báo mảng trong JavaScript?",
    "Chỉ số của mảng là gì? Chỉ số của mảng xuất phát từ 0 hay 1?",
    "Kích thước của mảng là gì?",
    "Phân biệt push() và unshift()?",
    "Phân biệt push() và pop()?",
    "Phân biệt shift() và unshift()?",
    "Nếu muốn xóa phần tử cuối cùng của mảng dùng hàm nào? ",
    "Nếu xóa phần tử đầu tiên của mảng dùng hàm nào?",
    "Muốn sắp xếp mảng thì dùng hàm nào?",
    "Thao tác duyệt mảng 2 chiều?",
    "Hàm (function) là gì?",
    "Phân biệt giữa tham số hình thức (formal arguments) và tham số thực (actual arguments)?",
    "Phân biệt hàm gọi (calling function) và hàm được goi (called function)?",
    "Câu lệnh return dùng để làm gì?",
    "Có được phép viết “return;”?",
    "Phân biệt return và break?",
    "Trình bày về OOP? "
];
const answer = [
    "Là một tập hợp hữu hạn các chỉ thị để được thực thi theo một thứ tự nào đó để thu được kết quả mong muốn. Nói chung thì giải thuật là độc lập với các ngôn ngữ lập trình, tức là một giải thuật có thể được triển khai trong nhiều ngôn ngữ lập trình khác nhau.",
    "Pseudo-code (Mã giả) : Liệt kê tuần tự các bước bằng ngôn ngữ tự nhiên để biểu diễn thuật toán ----- Flowchart (Lưu đồ) : Lưu đồ mô tả giải thuật bằng các sơ đồ hình khối, mỗi khối qui định một hành động",
    "Để giảm lỗi, tăng hiệu quả làm việc và giúp lập trình viên giải quyết tư duy vấn đề tốt hơn.",
    "Sử dụng flowchart cần cấu trúc, ngắn gọn hơn, dễ hiểu hơn, và có thể đạt được thuật toán.",
    "Để vấn đề được giải quyết. Bởi vì khi vô hạn bước thực thi đồng nghĩa với vấn đề không bao giờ được giải quyết",
    "Hình tròn: để bắt đầu hoặc kết thúc chương trình. Hình vuông: là những bước cần tính toán. Hình bình hành:  là các lệnh nhập hoặc xuất. Hình thoi: là các câu lệnh cần rẻ nhánh",
    "Là một hệ thống lưu giữ các phiên bản của mã nguồn của sản phẩm phần mềm, giúp các lập trình viên có thể dễ dàng lấy lại phiên bản mong muốn.",
    "Hệ thống quản lí mã nguồn tập trung là hệ thống mà mã nguồn được đặt ở server còn Hệ thống quản lí mã nguồn phân tán là mã nguồn được phân tán ở máy các lập trình viên",
    "Git là tên gọi của một Hệ thống quản lý phiên bản phân tán (Distributed Version Control System – DVCS) là một trong những hệ thống quản lý phiên bản phân tán phổ biến nhất hiện nay. Ưu điểm : Git dễ sử dụng, an toàn và nhanh chóng. - Có thể giúp quy trình làm việc code theo nhóm đơn giản hơn rất nhiều bằng việc kết hợp các phân nhánh - Bạn có thể làm việc ở bất cứ đâu vì chỉ cần clone mã nguồn từ kho chứa hoặc clone một phiên bản thay đổi nào đó từ kho chứa, hoặc một nhánh nào đó từ kho chứa. - Dễ dàng trong việc deployment sản phẩm.",
    "Phân tán",
    "Repository là nơi chứa toàn bộ mã nguồn, bao gồm các file và lịch sử của các file đó, là nơi chứa tất cả các commit",
    "Để tránh xung đột các dữ liệu và bảo toàn tính đồng bộ dữ liệu",
    "Để đây dữ liệu từ repo local lên repo remote - git push",
    "Kéo dữ liệu từ repo remote xuống repo local - git pull",
    "Git clone để sao chép từ repo remote xuống repo local (xuống máy tính của lập trình viên) - git clone",
    "Www viết tắt của cụm từ World Wide Web là không gian nơi chứa thông tin, tài liệu và tài nguyên của mọi website trên toàn cầu.",
    "Là ngôn ngữ đánh máy siêu văn bản, được sử dụng để tạo ra các website.",
    "head, body, h1, p, a, img, ul, ol, li,...",
    "Thẻ div dùng để tạo ra một khối nằm dọc - Thẻ span tạo một khối trên một dòng",
    "Là địa chỉ trang web. +URL tuyệt đối là: có đầy đủ các thành phần (vd: https://www.youtube.com/index.html) +URL tương đối chỉ có phần phần liên kết trỏ tới thư mục (vd: ./index.html)    ",
    "Là một tham chiếu đến tài liệu mà người dùng có thể bấm vào. Một siêu liên kết trỏ đến toàn bộ tài liệu hoặc một phần tử cụ thể bên trong một tài liệu.",
    "<a href='ID-phần-cần-liên-kết'></a>",
    "<a href='url-phần-cần-liên-kết'></a>",
    "+Internal link:  sử dụng link trong cùng thư mục - +External link: sử dụng link ngoài thư mục",
    "Có 2 loại danh sách  +thẻ ol: danh sách có thư tự +thẻ ul danh sách không có thứ tự",
    "<ol type='A' start='3'>",
    "Dùng để gửi dữ liệu",
    "Là nơi mà dữ liệu được gửi tới",
    "GET : Dữ liệu được gửi đi sẽ hiển thị trên thanh địa chỉ của trình duyệt, Không nên sử dụng để gửi các dữ liệu nhạy cảm (chẳng hạn như mật khẩu), Thường được sử dụng để gửi những dữ liệu nhỏ. Có giới hạn 1024 kí tự. POST : Dữ liệu được gửi đi KHÔNG hiển thị trên thanh địa chỉ của trình duyệt,Được sử dụng để gửi các dữ liệu nhạy cảm,Không hạn chế dung lượng dữ liệu gửi đi. Thường được sử dụng để gửi dữ liệu lớn lên server. Không giới hạn kí tự, tốc độ chậm hơn GET",
    "button : Tạo một nút bấm đơn thuần - submit : Tạo nút bấm gửi form - reset : Tạo nút bấm - đưa dữ liệu đang nhập trên form về mặc định",
    "<form action=”CodeGym.vn”></form>.",
    "Sử dụng colspan=”3”",
    "Sử dụng rowspan=”2”",
    "+cellpadding: là khoảng cách giữa viền và chữ. +cellspacing: là khoảng cách giữa hai ô.",
    "+internal: +external: +inline:",
    "Đúng. Vì sao thì hỏi anh Tâm T_T",
    "Đúng ",
    "Biến là một nơi để lưu trữ dữ liệu. Biến toàn cục : Được khai báo ngoài hàm và được sử dụng cho tất cả các hàm. Biến cục bộ : Được khai báo trong hàm và chỉ sử dụng được trong hàm đó.",
    "Trong khi var là biến toàn cục ( global ) hay hàm ( function ) trong khi let và const được định phạm vi là khối mà ( block ). - Var có thể cập nhật và khai báo lại trong phạm vi tồn tại., biến let có thể cập nhật nhưng không thể khai báo lại, biến const không thể khai báo lại cũng không thể cập nhật.  - Biến var được khởi tạo với giá trị underfined trong khi let với const thì không có giá trị. - Trong khi let và var có thể khai báo không khởi gán giá trị thì const phải gán giá trị khi khai báo. ",
    "String / Number / Boolean / Underfined / Null",
    "alert / confirm / prompt",
    "Toán tử số học - Toán tử so sánh - Toán tử logic - Toán tử gán - Toán tử điều kiện",
    "+Toán tử ==: so sánh về giá trị nhưng không so sánh kiểu dữ liệu. +Toán tử ===: so sánh về giá trị và so sánh kiểu dữ liệu.",
    "+Toán tử &&: cả 2 điều kiện đều đúng thì sẽ chạy chương trình. +Toán tử ||: một trong hai điều kiện đúng thì sẽ chạy chương trình.",
    "TRUE",
    "+Toán tử ++:  cộng một đơn vị /Toán tử --: trừ một đơn vị",
    "++a: cộng rồi mới chạy câu lệnh / a++: chạy rồi mới cộng câu lệnh",
    "Các câu lệnh cho phép thay đổi chương trình dựa trên một điều kiện nào đó.Một câu lệnh hay một chuỗi các câu lệnh có thể được thực hiện hoặc không.",
    "if / if-else / if-else if – else / switch-case",
    "Sử dụng lệnh if để xác định một khối mã Javascript sẽ được thực thi nếu điều kiện đưa ra là đúng",
    "Sử dụng switch để xác định nhiều khối mã luân phiên được thực thi.",
    "Vì khi chỉ cần kiểm tra 1 điều kiện thì sẽ không cần ELSE",
    "Khi biết trước giá trị của biến cấn kiểm tra.",
    "Là lệnh dừng để thoát khỏi cấu trúc điều kiện switch-case. Nếu một case không có break thì các câu lệnh sau vẫn được thực thi.",
    "Không",
    "Trước ? là câu điều kiện, nếu đúng thì ra kq sau ?, còn sai thì ra kq sau :",
    "Event là sự tương tác của Javascript với HMTL được xử lý thông qua các sự kiện xảy ra khi người sử dụng hoặc trình duyệt thao tác một trang.",
    "Xảy ra khi giá trị (value) của thẻ HTML đổi. Thường dùng trong các đối thẻ form input.",
    "Sự khiện xảy ra khi người dùng click chuột vào phần tử.",
    "<input type='button' value='delete' onclick='confirm('Bạn có chắc xóa không')'/>",
    "+onmouseover: di chuyển chuột vào nút thì sẽ chạy chương trình   +onmouseout: di chuyển chuột vào nút rồi di chuyển ra thì sẽ chạy chương trình    onmousemove: chỉ cần di chuyển chuột sẽ chạy chương trình",
    "+onkeydown: khi bấm phím xuống. +onkeyup: khi thả phím ra. +onkeypress: khi nhấn phím ",
    "+onfocus: khi click chuột vào ô input +onblur: khi click chuột ngoài ô input",
    "Khi chương trình bắt đầu chạy",
    "+innerHTML: Có thể chạy thẻ HTML +innerText: hiển thị ra cả phần thẻ ",
    "N/A",
    "Cả 2 đều không thể thay đổi giá trị. readonly : Có thể bấm vào và giá trị có thể gửi kèm theo form. disable : không thể bấm vào cũng như giá trị không gửi kèm theo form.",
    "Vòng lặp thực hiện những công việc thương tự nhau với số lần biết trước hoặc số lần chưa biết trước. ",
    "+for: +while: +do...while:",
    "+vòng lặp for: khi mình biết trước số lần lặp  +vòng lặp while: khi mình không biết trước vòng lặp, xét điều kiện rồi mới thực hiện +vòng lặp do...while: thực hiện xong ít nhất một lần mới xét điều kiện",
    "Khi người dùng cần thực hiện lệnh trước sau đó mới kiểm tra",
    "Khi biết trước số lần lặp",
    "Khi không biết trước số lần lặp",
    "Trong vòng lặp for có thêm một vòng lặp for. Mỗi lần chạy một vòng for ngoài thì chạy hết vòng for trong rồi mới chạy vòng for ngoài tiếp theo.",
    "+break: dừng hẳn vòng lặp +continue: dừng vòng lặp hiện tại rồi nhảy sang vòng lặp tiếp theo.",
    "Mảng là một loại biến đặc biệt, có thể lưu được nhiều giá trị thay vì chỉ một giá trị như các biến thông thường.",
    "var array= []; var array = new Array()",
    "Chỉ số của mảng là vị trí của của các phần tử trong mảng . và xuất phát từ 0",
    "Độ dài của mảng được tính bằng .length",
    "Push : thêm vào cuối mảng / unshift : Thêm phần tử vào đầu mảng",
    "Push : Thêm vào đầu mảng / pop : xóa phần tử cuối mảng",
    "Shift : xóa phần tử đầu mảng / unshift : thêm phần tử vào đầu mảng",
    "tên-mảng.pop()",
    "tên-mảng.shift()",
    "tên-mảng.sort()",
    "Sử dụng 2 vòng for lồng nhau",
    "Là tập hợp các thủ tục để giải quyết vấn đề nào đó.",
    "+tham số hình thức (formal arguments) là biến được liệt kê trong danh sách tham số (thường nằm tại phần đầu của định nghĩa chương trình con).+tham số thực (actual arguments): là giá trị cụ thể của biến đó tại thời gian chạy",
    "Hàm gọi 1 hàm khác được gọi là calling function. Hàm được hàm khác gọi tới dc gọi là called function",
    "Để dừng hàm và trả về giá trị.",
    "Được",
    "+return: dừng lại và trả về giá trị.+break: có thể dùng trong các vòng lặp,đặc biệt dùng trong switch-case (điều kiện rẽ nhánh). Chức năng là dừng lại và không trả về giá trị.",
    "Lập trình hướng đối tượng là một kỹ thuật lập trình cho phép lập trình viên tạo ra các đối tượng trong code trừu tượng hóa các đối tượng."
]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function showQuestion() {
    let showField = document.getElementById('show-quest');
    if (quest.length) {
        let max = quest.length;
        let number = getRandomInt(max);
        showField.innerHTML = '<p class="lead" style="text-align:center; margin-top:50px"> ' + quest[number] + '</p>';
        document.getElementById('hint').innerText = answer[number];
        quest.splice(number, 1);
        answer.splice(number, 1);
    } else {
        showField.innerHTML = '<p class="lead" style="text-align:center; margin-top:50px">Hết câu hỏi rồi ! Chúc mừng bạn !</p>';;
    }
}
// Utilities
var Vector3 = {};
var Matrix44 = {};
Vector3.create = function (x, y, z) {
    return { 'x': x, 'y': y, 'z': z };
};
Vector3.dot = function (v0, v1) {
    return v0.x * v1.x + v0.y * v1.y + v0.z * v1.z;
};
Vector3.cross = function (v, v0, v1) {
    v.x = v0.y * v1.z - v0.z * v1.y;
    v.y = v0.z * v1.x - v0.x * v1.z;
    v.z = v0.x * v1.y - v0.y * v1.x;
};
Vector3.normalize = function (v) {
    var l = v.x * v.x + v.y * v.y + v.z * v.z;
    if (l > 0.00001) {
        l = 1.0 / Math.sqrt(l);
        v.x *= l;
        v.y *= l;
        v.z *= l;
    }
};
Vector3.arrayForm = function (v) {
    if (v.array) {
        v.array[0] = v.x;
        v.array[1] = v.y;
        v.array[2] = v.z;
    }
    else {
        v.array = new Float32Array([v.x, v.y, v.z]);
    }
    return v.array;
};
Matrix44.createIdentity = function () {
    return new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
};
Matrix44.loadProjection = function (m, aspect, vdeg, near, far) {
    var h = near * Math.tan(vdeg * Math.PI / 180.0 * 0.5) * 2.0;
    var w = h * aspect;

    m[0] = 2.0 * near / w;
    m[1] = 0.0;
    m[2] = 0.0;
    m[3] = 0.0;

    m[4] = 0.0;
    m[5] = 2.0 * near / h;
    m[6] = 0.0;
    m[7] = 0.0;

    m[8] = 0.0;
    m[9] = 0.0;
    m[10] = -(far + near) / (far - near);
    m[11] = -1.0;

    m[12] = 0.0;
    m[13] = 0.0;
    m[14] = -2.0 * far * near / (far - near);
    m[15] = 0.0;
};
Matrix44.loadLookAt = function (m, vpos, vlook, vup) {
    var frontv = Vector3.create(vpos.x - vlook.x, vpos.y - vlook.y, vpos.z - vlook.z);
    Vector3.normalize(frontv);
    var sidev = Vector3.create(1.0, 0.0, 0.0);
    Vector3.cross(sidev, vup, frontv);
    Vector3.normalize(sidev);
    var topv = Vector3.create(1.0, 0.0, 0.0);
    Vector3.cross(topv, frontv, sidev);
    Vector3.normalize(topv);

    m[0] = sidev.x;
    m[1] = topv.x;
    m[2] = frontv.x;
    m[3] = 0.0;

    m[4] = sidev.y;
    m[5] = topv.y;
    m[6] = frontv.y;
    m[7] = 0.0;

    m[8] = sidev.z;
    m[9] = topv.z;
    m[10] = frontv.z;
    m[11] = 0.0;

    m[12] = -(vpos.x * m[0] + vpos.y * m[4] + vpos.z * m[8]);
    m[13] = -(vpos.x * m[1] + vpos.y * m[5] + vpos.z * m[9]);
    m[14] = -(vpos.x * m[2] + vpos.y * m[6] + vpos.z * m[10]);
    m[15] = 1.0;
};

//
var timeInfo = {
    'start': 0, 'prev': 0, // Date
    'delta': 0, 'elapsed': 0 // Number(sec)
};

//
var gl;
var renderSpec = {
    'width': 0,
    'height': 0,
    'aspect': 1,
    'array': new Float32Array(3),
    'halfWidth': 0,
    'halfHeight': 0,
    'halfArray': new Float32Array(3)
    // and some render targets. see setViewport()
};
renderSpec.setSize = function (w, h) {
    renderSpec.width = w;
    renderSpec.height = h;
    renderSpec.aspect = renderSpec.width / renderSpec.height;
    renderSpec.array[0] = renderSpec.width;
    renderSpec.array[1] = renderSpec.height;
    renderSpec.array[2] = renderSpec.aspect;

    renderSpec.halfWidth = Math.floor(w / 2);
    renderSpec.halfHeight = Math.floor(h / 2);
    renderSpec.halfArray[0] = renderSpec.halfWidth;
    renderSpec.halfArray[1] = renderSpec.halfHeight;
    renderSpec.halfArray[2] = renderSpec.halfWidth / renderSpec.halfHeight;
};

function deleteRenderTarget(rt) {
    gl.deleteFramebuffer(rt.frameBuffer);
    gl.deleteRenderbuffer(rt.renderBuffer);
    gl.deleteTexture(rt.texture);
}

function createRenderTarget(w, h) {
    var ret = {
        'width': w,
        'height': h,
        'sizeArray': new Float32Array([w, h, w / h]),
        'dtxArray': new Float32Array([1.0 / w, 1.0 / h])
    };
    ret.frameBuffer = gl.createFramebuffer();
    ret.renderBuffer = gl.createRenderbuffer();
    ret.texture = gl.createTexture();

    gl.bindTexture(gl.TEXTURE_2D, ret.texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

    gl.bindFramebuffer(gl.FRAMEBUFFER, ret.frameBuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, ret.texture, 0);

    gl.bindRenderbuffer(gl.RENDERBUFFER, ret.renderBuffer);
    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, w, h);
    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, ret.renderBuffer);

    gl.bindTexture(gl.TEXTURE_2D, null);
    gl.bindRenderbuffer(gl.RENDERBUFFER, null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    return ret;
}

function compileShader(shtype, shsrc) {
    var retsh = gl.createShader(shtype);

    gl.shaderSource(retsh, shsrc);
    gl.compileShader(retsh);

    if (!gl.getShaderParameter(retsh, gl.COMPILE_STATUS)) {
        var errlog = gl.getShaderInfoLog(retsh);
        gl.deleteShader(retsh);
        console.error(errlog);
        return null;
    }
    return retsh;
}

function createShader(vtxsrc, frgsrc, uniformlist, attrlist) {
    var vsh = compileShader(gl.VERTEX_SHADER, vtxsrc);
    var fsh = compileShader(gl.FRAGMENT_SHADER, frgsrc);

    if (vsh == null || fsh == null) {
        return null;
    }

    var prog = gl.createProgram();
    gl.attachShader(prog, vsh);
    gl.attachShader(prog, fsh);

    gl.deleteShader(vsh);
    gl.deleteShader(fsh);

    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
        var errlog = gl.getProgramInfoLog(prog);
        console.error(errlog);
        return null;
    }

    if (uniformlist) {
        prog.uniforms = {};
        for (var i = 0; i < uniformlist.length; i++) {
            prog.uniforms[uniformlist[i]] = gl.getUniformLocation(prog, uniformlist[i]);
        }
    }

    if (attrlist) {
        prog.attributes = {};
        for (var i = 0; i < attrlist.length; i++) {
            var attr = attrlist[i];
            prog.attributes[attr] = gl.getAttribLocation(prog, attr);
        }
    }

    return prog;
}

function useShader(prog) {
    gl.useProgram(prog);
    for (var attr in prog.attributes) {
        gl.enableVertexAttribArray(prog.attributes[attr]);;
    }
}

function unuseShader(prog) {
    for (var attr in prog.attributes) {
        gl.disableVertexAttribArray(prog.attributes[attr]);;
    }
    gl.useProgram(null);
}

/////
var projection = {
    'angle': 60,
    'nearfar': new Float32Array([0.1, 100.0]),
    'matrix': Matrix44.createIdentity()
};
var camera = {
    'position': Vector3.create(0, 0, 100),
    'lookat': Vector3.create(0, 0, 0),
    'up': Vector3.create(0, 1, 0),
    'dof': Vector3.create(10.0, 4.0, 8.0),
    'matrix': Matrix44.createIdentity()
};

var pointFlower = {};
var meshFlower = {};
var sceneStandBy = false;

var BlossomParticle = function () {
    this.velocity = new Array(3);
    this.rotation = new Array(3);
    this.position = new Array(3);
    this.euler = new Array(3);
    this.size = 1.0;
    this.alpha = 1.0;
    this.zkey = 0.0;
};

BlossomParticle.prototype.setVelocity = function (vx, vy, vz) {
    this.velocity[0] = vx;
    this.velocity[1] = vy;
    this.velocity[2] = vz;
};

BlossomParticle.prototype.setRotation = function (rx, ry, rz) {
    this.rotation[0] = rx;
    this.rotation[1] = ry;
    this.rotation[2] = rz;
};

BlossomParticle.prototype.setPosition = function (nx, ny, nz) {
    this.position[0] = nx;
    this.position[1] = ny;
    this.position[2] = nz;
};

BlossomParticle.prototype.setEulerAngles = function (rx, ry, rz) {
    this.euler[0] = rx;
    this.euler[1] = ry;
    this.euler[2] = rz;
};

BlossomParticle.prototype.setSize = function (s) {
    this.size = s;
};

BlossomParticle.prototype.update = function (dt, et) {
    this.position[0] += this.velocity[0] * dt;
    this.position[1] += this.velocity[1] * dt;
    this.position[2] += this.velocity[2] * dt;

    this.euler[0] += this.rotation[0] * dt;
    this.euler[1] += this.rotation[1] * dt;
    this.euler[2] += this.rotation[2] * dt;
};

function createPointFlowers() {
    // get point sizes
    var prm = gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE);
    renderSpec.pointSize = { 'min': prm[0], 'max': prm[1] };

    var vtxsrc = document.getElementById("sakura_point_vsh").textContent;
    var frgsrc = document.getElementById("sakura_point_fsh").textContent;

    pointFlower.program = createShader(
        vtxsrc, frgsrc,
        ['uProjection', 'uModelview', 'uResolution', 'uOffset', 'uDOF', 'uFade'],
        ['aPosition', 'aEuler', 'aMisc']
    );

    useShader(pointFlower.program);
    pointFlower.offset = new Float32Array([0.0, 0.0, 0.0]);
    pointFlower.fader = Vector3.create(0.0, 10.0, 0.0);

    // paramerters: velocity[3], rotate[3]
    pointFlower.numFlowers = 1600;
    pointFlower.particles = new Array(pointFlower.numFlowers);
    // vertex attributes {position[3], euler_xyz[3], size[1]}
    pointFlower.dataArray = new Float32Array(pointFlower.numFlowers * (3 + 3 + 2));
    pointFlower.positionArrayOffset = 0;
    pointFlower.eulerArrayOffset = pointFlower.numFlowers * 3;
    pointFlower.miscArrayOffset = pointFlower.numFlowers * 6;

    pointFlower.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, pointFlower.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, pointFlower.dataArray, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    unuseShader(pointFlower.program);

    for (var i = 0; i < pointFlower.numFlowers; i++) {
        pointFlower.particles[i] = new BlossomParticle();
    }
}

function initPointFlowers() {
    //area
    pointFlower.area = Vector3.create(20.0, 20.0, 20.0);
    pointFlower.area.x = pointFlower.area.y * renderSpec.aspect;

    pointFlower.fader.x = 10.0; //env fade start
    pointFlower.fader.y = pointFlower.area.z; //env fade half
    pointFlower.fader.z = 0.1;  //near fade start

    //particles
    var PI2 = Math.PI * 2.0;
    var tmpv3 = Vector3.create(0, 0, 0);
    var tmpv = 0;
    var symmetryrand = function () { return (Math.random() * 2.0 - 1.0); };
    for (var i = 0; i < pointFlower.numFlowers; i++) {
        var tmpprtcl = pointFlower.particles[i];

        //velocity
        tmpv3.x = symmetryrand() * 0.3 + 0.8;
        tmpv3.y = symmetryrand() * 0.2 - 1.0;
        tmpv3.z = symmetryrand() * 0.3 + 0.5;
        Vector3.normalize(tmpv3);
        tmpv = 2.0 + Math.random() * 1.0;
        tmpprtcl.setVelocity(tmpv3.x * tmpv, tmpv3.y * tmpv, tmpv3.z * tmpv);

        //rotation
        tmpprtcl.setRotation(
            symmetryrand() * PI2 * 0.5,
            symmetryrand() * PI2 * 0.5,
            symmetryrand() * PI2 * 0.5
        );

        //position
        tmpprtcl.setPosition(
            symmetryrand() * pointFlower.area.x,
            symmetryrand() * pointFlower.area.y,
            symmetryrand() * pointFlower.area.z
        );

        //euler
        tmpprtcl.setEulerAngles(
            Math.random() * Math.PI * 2.0,
            Math.random() * Math.PI * 2.0,
            Math.random() * Math.PI * 2.0
        );

        //size
        tmpprtcl.setSize(0.9 + Math.random() * 0.1);
    }
}

function renderPointFlowers() {
    //update
    var PI2 = Math.PI * 2.0;
    var limit = [pointFlower.area.x, pointFlower.area.y, pointFlower.area.z];
    var repeatPos = function (prt, cmp, limit) {
        if (Math.abs(prt.position[cmp]) - prt.size * 0.5 > limit) {
            //out of area
            if (prt.position[cmp] > 0) {
                prt.position[cmp] -= limit * 2.0;
            }
            else {
                prt.position[cmp] += limit * 2.0;
            }
        }
    };
    var repeatEuler = function (prt, cmp) {
        prt.euler[cmp] = prt.euler[cmp] % PI2;
        if (prt.euler[cmp] < 0.0) {
            prt.euler[cmp] += PI2;
        }
    };

    for (var i = 0; i < pointFlower.numFlowers; i++) {
        var prtcl = pointFlower.particles[i];
        prtcl.update(timeInfo.delta, timeInfo.elapsed);
        repeatPos(prtcl, 0, pointFlower.area.x);
        repeatPos(prtcl, 1, pointFlower.area.y);
        repeatPos(prtcl, 2, pointFlower.area.z);
        repeatEuler(prtcl, 0);
        repeatEuler(prtcl, 1);
        repeatEuler(prtcl, 2);

        prtcl.alpha = 1.0;//(pointFlower.area.z - prtcl.position[2]) * 0.5;

        prtcl.zkey = (camera.matrix[2] * prtcl.position[0]
            + camera.matrix[6] * prtcl.position[1]
            + camera.matrix[10] * prtcl.position[2]
            + camera.matrix[14]);
    }

    // sort
    pointFlower.particles.sort(function (p0, p1) { return p0.zkey - p1.zkey; });

    // update data
    var ipos = pointFlower.positionArrayOffset;
    var ieuler = pointFlower.eulerArrayOffset;
    var imisc = pointFlower.miscArrayOffset;
    for (var i = 0; i < pointFlower.numFlowers; i++) {
        var prtcl = pointFlower.particles[i];
        pointFlower.dataArray[ipos] = prtcl.position[0];
        pointFlower.dataArray[ipos + 1] = prtcl.position[1];
        pointFlower.dataArray[ipos + 2] = prtcl.position[2];
        ipos += 3;
        pointFlower.dataArray[ieuler] = prtcl.euler[0];
        pointFlower.dataArray[ieuler + 1] = prtcl.euler[1];
        pointFlower.dataArray[ieuler + 2] = prtcl.euler[2];
        ieuler += 3;
        pointFlower.dataArray[imisc] = prtcl.size;
        pointFlower.dataArray[imisc + 1] = prtcl.alpha;
        imisc += 2;
    }

    //draw
    gl.enable(gl.BLEND);
    //gl.disable(gl.DEPTH_TEST);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    var prog = pointFlower.program;
    useShader(prog);

    gl.uniformMatrix4fv(prog.uniforms.uProjection, false, projection.matrix);
    gl.uniformMatrix4fv(prog.uniforms.uModelview, false, camera.matrix);
    gl.uniform3fv(prog.uniforms.uResolution, renderSpec.array);
    gl.uniform3fv(prog.uniforms.uDOF, Vector3.arrayForm(camera.dof));
    gl.uniform3fv(prog.uniforms.uFade, Vector3.arrayForm(pointFlower.fader));

    gl.bindBuffer(gl.ARRAY_BUFFER, pointFlower.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, pointFlower.dataArray, gl.DYNAMIC_DRAW);

    gl.vertexAttribPointer(prog.attributes.aPosition, 3, gl.FLOAT, false, 0, pointFlower.positionArrayOffset * Float32Array.BYTES_PER_ELEMENT);
    gl.vertexAttribPointer(prog.attributes.aEuler, 3, gl.FLOAT, false, 0, pointFlower.eulerArrayOffset * Float32Array.BYTES_PER_ELEMENT);
    gl.vertexAttribPointer(prog.attributes.aMisc, 2, gl.FLOAT, false, 0, pointFlower.miscArrayOffset * Float32Array.BYTES_PER_ELEMENT);

    // doubler
    for (var i = 1; i < 2; i++) {
        var zpos = i * -2.0;
        pointFlower.offset[0] = pointFlower.area.x * -1.0;
        pointFlower.offset[1] = pointFlower.area.y * -1.0;
        pointFlower.offset[2] = pointFlower.area.z * zpos;
        gl.uniform3fv(prog.uniforms.uOffset, pointFlower.offset);
        gl.drawArrays(gl.POINT, 0, pointFlower.numFlowers);

        pointFlower.offset[0] = pointFlower.area.x * -1.0;
        pointFlower.offset[1] = pointFlower.area.y * 1.0;
        pointFlower.offset[2] = pointFlower.area.z * zpos;
        gl.uniform3fv(prog.uniforms.uOffset, pointFlower.offset);
        gl.drawArrays(gl.POINT, 0, pointFlower.numFlowers);

        pointFlower.offset[0] = pointFlower.area.x * 1.0;
        pointFlower.offset[1] = pointFlower.area.y * -1.0;
        pointFlower.offset[2] = pointFlower.area.z * zpos;
        gl.uniform3fv(prog.uniforms.uOffset, pointFlower.offset);
        gl.drawArrays(gl.POINT, 0, pointFlower.numFlowers);

        pointFlower.offset[0] = pointFlower.area.x * 1.0;
        pointFlower.offset[1] = pointFlower.area.y * 1.0;
        pointFlower.offset[2] = pointFlower.area.z * zpos;
        gl.uniform3fv(prog.uniforms.uOffset, pointFlower.offset);
        gl.drawArrays(gl.POINT, 0, pointFlower.numFlowers);
    }

    //main
    pointFlower.offset[0] = 0.0;
    pointFlower.offset[1] = 0.0;
    pointFlower.offset[2] = 0.0;
    gl.uniform3fv(prog.uniforms.uOffset, pointFlower.offset);
    gl.drawArrays(gl.POINT, 0, pointFlower.numFlowers);

    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    unuseShader(prog);

    gl.enable(gl.DEPTH_TEST);
    gl.disable(gl.BLEND);
}

// effects
//common util
function createEffectProgram(vtxsrc, frgsrc, exunifs, exattrs) {
    var ret = {};
    var unifs = ['uResolution', 'uSrc', 'uDelta'];
    if (exunifs) {
        unifs = unifs.concat(exunifs);
    }
    var attrs = ['aPosition'];
    if (exattrs) {
        attrs = attrs.concat(exattrs);
    }

    ret.program = createShader(vtxsrc, frgsrc, unifs, attrs);
    useShader(ret.program);

    ret.dataArray = new Float32Array([
        -1.0, -1.0,
        1.0, -1.0,
        -1.0, 1.0,
        1.0, 1.0
    ]);
    ret.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, ret.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, ret.dataArray, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    unuseShader(ret.program);

    return ret;
}

// basic usage
// useEffect(prog, srctex({'texture':texid, 'dtxArray':(f32)[dtx, dty]})); //basic initialize
// gl.uniform**(...); //additional uniforms
// drawEffect()
// unuseEffect(prog)
// TEXTURE0 makes src
function useEffect(fxobj, srctex) {
    var prog = fxobj.program;
    useShader(prog);
    gl.uniform3fv(prog.uniforms.uResolution, renderSpec.array);

    if (srctex != null) {
        gl.uniform2fv(prog.uniforms.uDelta, srctex.dtxArray);
        gl.uniform1i(prog.uniforms.uSrc, 0);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, srctex.texture);
    }
}
function drawEffect(fxobj) {
    gl.bindBuffer(gl.ARRAY_BUFFER, fxobj.buffer);
    gl.vertexAttribPointer(fxobj.program.attributes.aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}
function unuseEffect(fxobj) {
    unuseShader(fxobj.program);
}

var effectLib = {};
function createEffectLib() {

    var vtxsrc, frgsrc;
    //common
    var cmnvtxsrc = document.getElementById("fx_common_vsh").textContent;

    //background
    frgsrc = document.getElementById("bg_fsh").textContent;
    effectLib.sceneBg = createEffectProgram(cmnvtxsrc, frgsrc, ['uTimes'], null);

    // make brightpixels buffer
    frgsrc = document.getElementById("fx_brightbuf_fsh").textContent;
    effectLib.mkBrightBuf = createEffectProgram(cmnvtxsrc, frgsrc, null, null);

    // direction blur
    frgsrc = document.getElementById("fx_dirblur_r4_fsh").textContent;
    effectLib.dirBlur = createEffectProgram(cmnvtxsrc, frgsrc, ['uBlurDir'], null);

    //final composite
    vtxsrc = document.getElementById("pp_final_vsh").textContent;
    frgsrc = document.getElementById("pp_final_fsh").textContent;
    effectLib.finalComp = createEffectProgram(vtxsrc, frgsrc, ['uBloom'], null);
}

// background
function createBackground() {
    //console.log("create background");
}
function initBackground() {
    //console.log("init background");
}
function renderBackground() {
    gl.disable(gl.DEPTH_TEST);

    useEffect(effectLib.sceneBg, null);
    gl.uniform2f(effectLib.sceneBg.program.uniforms.uTimes, timeInfo.elapsed, timeInfo.delta);
    drawEffect(effectLib.sceneBg);
    unuseEffect(effectLib.sceneBg);

    gl.enable(gl.DEPTH_TEST);
}

// post process
var postProcess = {};
function createPostProcess() {
    //console.log("create post process");
}
function initPostProcess() {
    //console.log("init post process");
}

function renderPostProcess() {
    gl.enable(gl.TEXTURE_2D);
    gl.disable(gl.DEPTH_TEST);
    var bindRT = function (rt, isclear) {
        gl.bindFramebuffer(gl.FRAMEBUFFER, rt.frameBuffer);
        gl.viewport(0, 0, rt.width, rt.height);
        if (isclear) {
            gl.clearColor(0, 0, 0, 0);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        }
    };

    //make bright buff
    bindRT(renderSpec.wHalfRT0, true);
    useEffect(effectLib.mkBrightBuf, renderSpec.mainRT);
    drawEffect(effectLib.mkBrightBuf);
    unuseEffect(effectLib.mkBrightBuf);

    // make bloom
    for (var i = 0; i < 2; i++) {
        var p = 1.5 + 1 * i;
        var s = 2.0 + 1 * i;
        bindRT(renderSpec.wHalfRT1, true);
        useEffect(effectLib.dirBlur, renderSpec.wHalfRT0);
        gl.uniform4f(effectLib.dirBlur.program.uniforms.uBlurDir, p, 0.0, s, 0.0);
        drawEffect(effectLib.dirBlur);
        unuseEffect(effectLib.dirBlur);

        bindRT(renderSpec.wHalfRT0, true);
        useEffect(effectLib.dirBlur, renderSpec.wHalfRT1);
        gl.uniform4f(effectLib.dirBlur.program.uniforms.uBlurDir, 0.0, p, 0.0, s);
        drawEffect(effectLib.dirBlur);
        unuseEffect(effectLib.dirBlur);
    }

    //display
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, renderSpec.width, renderSpec.height);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    useEffect(effectLib.finalComp, renderSpec.mainRT);
    gl.uniform1i(effectLib.finalComp.program.uniforms.uBloom, 1);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, renderSpec.wHalfRT0.texture);
    drawEffect(effectLib.finalComp);
    unuseEffect(effectLib.finalComp);

    gl.enable(gl.DEPTH_TEST);
}

/////
var SceneEnv = {};
function createScene() {
    createEffectLib();
    createBackground();
    createPointFlowers();
    createPostProcess();
    sceneStandBy = true;
}

function initScene() {
    initBackground();
    initPointFlowers();
    initPostProcess();

    //camera.position.z = 17.320508;
    camera.position.z = pointFlower.area.z + projection.nearfar[0];
    projection.angle = Math.atan2(pointFlower.area.y, camera.position.z + pointFlower.area.z) * 180.0 / Math.PI * 2.0;
    Matrix44.loadProjection(projection.matrix, renderSpec.aspect, projection.angle, projection.nearfar[0], projection.nearfar[1]);
}

function renderScene() {
    //draw
    Matrix44.loadLookAt(camera.matrix, camera.position, camera.lookat, camera.up);

    gl.enable(gl.DEPTH_TEST);

    //gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, renderSpec.mainRT.frameBuffer);
    gl.viewport(0, 0, renderSpec.mainRT.width, renderSpec.mainRT.height);
    gl.clearColor(0.005, 0, 0.05, 0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    renderBackground();
    renderPointFlowers();
    renderPostProcess();
}

/////
function onResize(e) {
    makeCanvasFullScreen(document.getElementById("sakura"));
    setViewports();
    if (sceneStandBy) {
        initScene();
    }
}

function setViewports() {
    renderSpec.setSize(gl.canvas.width, gl.canvas.height);

    gl.clearColor(0.2, 0.2, 0.5, 1.0);
    gl.viewport(0, 0, renderSpec.width, renderSpec.height);

    var rtfunc = function (rtname, rtw, rth) {
        var rt = renderSpec[rtname];
        if (rt) deleteRenderTarget(rt);
        renderSpec[rtname] = createRenderTarget(rtw, rth);
    };
    rtfunc('mainRT', renderSpec.width, renderSpec.height);
    rtfunc('wFullRT0', renderSpec.width, renderSpec.height);
    rtfunc('wFullRT1', renderSpec.width, renderSpec.height);
    rtfunc('wHalfRT0', renderSpec.halfWidth, renderSpec.halfHeight);
    rtfunc('wHalfRT1', renderSpec.halfWidth, renderSpec.halfHeight);
}

function render() {
    renderScene();
}

var animating = true;
function toggleAnimation(elm) {
    animating ^= true;
    if (animating) animate();
    if (elm) {
        elm.innerHTML = animating ? "Stop" : "Start";
    }
}

function stepAnimation() {
    if (!animating) animate();
}

function animate() {
    var curdate = new Date();
    timeInfo.elapsed = (curdate - timeInfo.start) / 1000.0;
    timeInfo.delta = (curdate - timeInfo.prev) / 1000.0;
    timeInfo.prev = curdate;

    if (animating) requestAnimationFrame(animate);
    render();
}

function makeCanvasFullScreen(canvas) {
    var b = document.body;
    var d = document.documentElement;
    fullw = Math.max(b.clientWidth, b.scrollWidth, d.scrollWidth, d.clientWidth);
    fullh = Math.max(b.clientHeight, b.scrollHeight, d.scrollHeight, d.clientHeight);
    canvas.width = fullw;
    canvas.height = fullh;
}

window.addEventListener('load', function (e) {
    var canvas = document.getElementById("sakura");
    try {
        makeCanvasFullScreen(canvas);
        gl = canvas.getContext('experimental-webgl');
    } catch (e) {
        alert("WebGL not supported." + e);
        console.error(e);
        return;
    }

    window.addEventListener('resize', onResize);

    setViewports();
    createScene();
    initScene();

    timeInfo.start = new Date();
    timeInfo.prev = timeInfo.start;
    animate();
});

//set window.requestAnimationFrame
(function (w, r) {
    w['r' + r] = w['r' + r] || w['webkitR' + r] || w['mozR' + r] || w['msR' + r] || w['oR' + r] || function (c) { w.setTimeout(c, 1000 / 60); };
})(window, 'equestAnimationFrame');