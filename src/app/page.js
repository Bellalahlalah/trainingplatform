import Image from "next/image";
import styles from "./page.module.css";

const courses = [
  {
    title: "Digital Marketing",
    descTitle: "การตลาดดิจิทัล 101",
    desc: "เรียนรู้พื้นฐานการตลาดดิจิทัล ตั้งแต่ SEO, SEM, ไปจนถึง Social Media Marketing เพื่อสร้างแบรนด์และยอดขายให้เติบโตอย่างยั่งยืน",
    color: "#3B82F6",
  },
  {
    title: "Python Programming",
    descTitle: "พื้นฐานการเขียนโปรแกรม Python",
    desc: "เริ่มต้นเส้นทางโปรแกรมเมอร์กับภาษา Python ที่เรียนรู้ง่ายและใช้งานได้หลากหลาย เหมาะสำหรับผู้เริ่มต้นที่ไม่มีพื้นฐานมาก่อน",
    color: "#22C55E",
  },
  {
    title: "Graphic Design",
    descTitle: "การออกแบบกราฟิกด้วย Canva",
    desc: "สร้างสรรค์งานกราฟิกขายได้ด้วยตัวเองโดยไม่ต้องมีพื้นฐานมาก่อน ใช้งานง่ายและสนุก",
    color: "#A78BFA",
  },
  {
    title: "Data Science",
    descTitle: "วิทยาศาสตร์ข้อมูลเบื้องต้น",
    desc: "ปูพื้นฐานการวิเคราะห์ข้อมูล Data Science เรียนรู้การใช้เครื่องมือและเทคนิคที่จำเป็น",
    color: "#FACC15",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logoArea}>
          <Image src="/logo.svg" alt="Logo" width={32} height={32} />
          <span className={styles.brand}>Course Platform</span>
        </div>
        <nav className={styles.nav}>
          <a href="#">หน้าแรก</a>
          <a href="#">เกี่ยวกับเรา</a>
        </nav>
        <div className={styles.actions}>
          <button className={styles.loginBtn}>เข้าสู่ระบบ</button>
          <button className={styles.signupBtn}>สมัครสมาชิก</button>
        </div>
      </header>

      {/* Main */}
      <main className={styles.main}>
        <h2 className={styles.sectionTitle}>คอร์สเรียนทั้งหมด</h2>
        <div className={styles.grid}>
          {courses.map((course, idx) => (
            <div
              className={styles.card}
              key={idx}
              style={{ backgroundColor: course.color }}
            >
              <h3 className={styles.cardTitle}>{course.title}</h3>
              <div className={styles.cardBody}>
                <strong>{course.descTitle}</strong>
                <p>{course.desc}</p>
              </div>
              <div className={styles.cardActions}>
                <a href="#" className={styles.detailLink}>ดูรายละเอียด</a>
                <button className={styles.enrollBtn}>ลงทะเบียน</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}