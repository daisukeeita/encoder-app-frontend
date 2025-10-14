import React from "react";

const DashboardComponent = () => {
  return (
    <div className="min-w-full min-h-screen flex items-center flex-col">
      <div className="stats shadow min-w-7xl mb-5 mt-5">
        <div className="stat">
          <div className="stat-figure text-secondary">
            📅
          </div>
          <div className="stat-title">Daily Customers</div>
          <div className="stat-value text-primary">0</div>
          <div className="stat-desc text-success">↗︎ 21% more than yesterday</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            🗓️
          </div>
          <div className="stat-title">Monthly Customers</div>
          <div className="stat-value text-primary">30k</div>
          <div className="stat-desc text-success">↗︎ 30% more than last month</div>
        </div>  

        <div className="stat">
          <div className="stat-figure">
            📆
          </div>
          <div className="stat-title">Yearly Customers</div>
          <div className="stat-value text-primary">100k</div>
          <div className="stat-desc text-error">↘︎ 30% less than last year</div>
        </div>
      </div>

      <div className="min-w-7xl h-[50rem]">
        <h1 className="p-4 pb-2 text-lg tracking-wide font-semibold">Daily Customers</h1>
        <div className="overflow-x-auto">
          <table className="table table-zebra bg-base-100 rounded-box shadow-md min-h-full">

            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Policy Number</th>
                <th>Plate Number</th>
                <th>MV File Number</th>
                <th>Phone Number</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th>John Doe</th>
                <th>SAMPLE-001-POLNO</th>
                <th>ABC1234</th>
                <th>1234-0987654321</th>
                <th>0912-345-6789</th>
                <th>
                  <div className="badge badge-soft badge-success">Success</div>
                </th>
              </tr>

              <tr>
                <th>Jane Doe</th>
                <th>SAMPLE-002-POLNO</th>
                <th>ABC1234</th>
                <th>1234-0987654321</th>
                <th>0912-345-6789</th>
                <th>
                  <div className="badge badge-soft badge-error">Rejected</div>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
};

export default DashboardComponent;