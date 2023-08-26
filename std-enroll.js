	var selectedRow = null
	function onFormSubmit() {
		if (validate()) {
			var formData = readFormData();
			if (selectedRow == null)
				insertNewRecord(formData);
			else
				updateRecord(formData);
			resetForm();
		}
	}
	function readFormData() {
		var formData = {};
		formData["fullName"] = document.getElementById("fullName").value;
		formData["rollno"] = document.getElementById("rollno").value;
		formData["city"] = document.getElementById("city").value;
		formData["mobile"] = document.getElementById("mobile").value;
		formData["email"] = document.getElementById("email").value;
		formData["gender"] = document.getElementById("gender").value;
		formData["course"] = document.getElementById("course").value;
		formData["skill"] = document.getElementById("skill").value;
		return formData;
	}
	function insertNewRecord(data) {
		var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
		var newRow = table.insertRow(table.length);
		cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.fullName;
		cell1 = newRow.insertCell(1);
		cell1.innerHTML = data.rollno;
		cell2 = newRow.insertCell(2);
		cell2.innerHTML = data.city;
		cell3 = newRow.insertCell(3);
		cell3.innerHTML = data.mobile;
		cell4 = newRow.insertCell(4);
		cell4.innerHTML = data.email;
		cell5 = newRow.insertCell(5);
		cell5.innerHTML = data.gender;
		cell6 = newRow.insertCell(6);
		cell6.innerHTML = data.course;
		cell7 = newRow.insertCell(7);
		cell7.innerHTML = data.skill;
		cell8 =newRow.insertCell(8);
		cell8.innerHTML=`<a onClick="onEdit(this)">EDIT</a>
		<a onClick="onDelete(this)">DELETE</a>`;
	}
	function resetForm() {
		document.getElementById("fullName").value = "";
		document.getElementById("rollno").value = "";
		document.getElementById("city").value = "";
		document.getElementById("mobile").value = "";
		document.getElementById("email").value = "";
		document.getElementById("gender").value = "";
		document.getElementById("course").value = "";
		document.getElementById("skill").value = "";
		selectedRow = null;
	}
	function onEdit(td) {
		selectedRow = td.parentElement.parentElement;
		document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
		document.getElementById("rollno").value = selectedRow.cells[1].innerHTML;
		document.getElementById("city").value = selectedRow.cells[2].innerHTML;
		document.getElementById("mobile").value = selectedRow.cells[3].innerHTML;
		document.getElementById("email").value = selectedRow.cells[4].innerHTML;
		document.getElementById("gender").value = selectedRow.cells[5].innerHTML;
		document.getElementById("course").value = selectedRow.cells[6].innerHTML;
		document.getElementById("skill").value = selectedRow.cells[7].innerHTML;
	}
	function updateRecord(formData) {
		selectedRow.cells[0].innerHTML = formData.fullName;
		selectedRow.cells[1].innerHTML = formData.rollno;
		selectedRow.cells[2].innerHTML = formData.city;
		selectedRow.cells[3].innerHTML = formData.mobile;
		selectedRow.cells[4].innerHTML = formData.email;
		selectedRow.cells[5].innerHTML = formData.gender;
		selectedRow.cells[6].innerHTML = formData.course;
		selectedRow.cells[7].innerHTML = formData.skill;
	}
	function onDelete(td) {
		if (confirm('Are you sure to delete this record ?')) {
			row = td.parentElement.parentElement;
			document.getElementById("studentList").deleteRow(row.rowIndex);
			resetForm();
		}
	}
	function validate() {
		isValid = true;
		if (document.getElementById("fullName").value == "") {
			isValid = false;
			document.getElementById("fullNameValidationError").classList.remove("hide");
		} else {
			isValid = true;
			if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
				document.getElementById("fullNameValidationError").classList.add("hide");
		}
		return isValid;
	}	
		