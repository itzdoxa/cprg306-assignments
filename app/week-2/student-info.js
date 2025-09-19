import Link from "next/link";

const StudentInfo = () => {
  return (
    <div>
      <p>Name: Deepinder Singh</p>
      <p>
        GitHub:{" "}
        <Link
          href="https://github.com/itzdoxa/cprg306-assignments" target="_blank"
        >itzdoxa/cprg306-assignments
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;
