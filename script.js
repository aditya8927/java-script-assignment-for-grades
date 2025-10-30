student_name = prompt("Enter your name")
student_age = Number(prompt("Enter your age"))
student_marks = Number(prompt("Enter your marks"))
if (student_marks >= 95) {
    alert(student_name, ",Age:",student_age,",marks:",student_marks , ",Grade:'A+'","#Awesome")
}
else if (student_marks >= 90) {
    alert(student_name, ",Age:",student_age,",marks:",student_marks , ",Grade:'A'","#Great")
}
else if (student_marks >= 80) {
    alert(student_name, ",Age:",student_age,",marks:",student_marks , ",Grade:'B'","#Good")
}
else if (student_marks >= 70) {
    alert(student_name, ",Age:",student_age,",marks:",student_marks , ",Grade:'C'","#Needs more practice")
}
else if (student_marks >= 60) {
    alert(student_name, ",Age:",student_age,",marks:",student_marks , ",Grade:'D'","#2X your efforts")
}
else if (student_marks >= 50) {
    alert(student_name, ",Age:",student_age,",marks:",student_marks , ",Grade:'E'","#marks doesn't matter !!")
}
else if (student_marks >= 40) {
    alert(student_name, ",Age:",student_age,",marks:",student_marks , ",Grade:'F'","#boost your efforts,")
}
else {
    alert(student_name, ", Age:",student_age,",marks:",student_marks ,", FAILED","#demoted !")
}