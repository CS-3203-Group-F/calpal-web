import { Panel } from "./components/Panel/Panel";

export default function Home() {
  return (
    <main className="text-stone-800 flex min-h-screen flex-row items-center justify-betweenS">
      <Panel></Panel>
      <div className="flex flex-col items-start w-full min-h-screen">
        <img src="http://127.0.0.1:8090/api/files/urvbq4tamjbjukn/075jdbmz87nmcit/calendar_view_iurGMpKA8V.png?token="></img>
      </div>
    </main>
  );
}
