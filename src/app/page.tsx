import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-between items-center bg-black">
      <header>
        <h1>Welcome to Airflow Intelligence</h1>
        <div>
          <select id="cities">
            <option value="newyork">New York</option>
            <option value="losangeles">Los Angeles</option>
            <option value="chicago">Chicago</option>
          </select>
        </div>
      </header>
    </div>
  );
}
