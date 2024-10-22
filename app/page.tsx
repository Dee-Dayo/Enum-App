import Layout from "@/app/components/Layout/Layout";
import Sidebar from "@/app/pages/Workspace/SideBar/SideBar";
import Cohort from "@/app/pages/Workspace/Cohort/Cohort";

export default function Page() {
  return (
      <Layout>
          <div className="flex">
              <Sidebar/>
              <div className="p-8 flex-grow">
                  <Cohort/>
              </div>
          </div>
      </Layout>
  );
}
