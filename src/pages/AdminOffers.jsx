import React, { useMemo, useState } from "react";
import AdminLayout from "../components/AdminLayout";

const AdminOffers = () => {
  const [offers] = useState([
    {
      id: 1,
      title: "Summer Construction Special",
      description: "Get 15% off on all residential construction projects",
      discountType: "percentage",
      discountValue: 15,
      code: "SUMMER15",
      validFrom: "2026-06-01",
      validUntil: "2026-08-31",
      status: "active",
      category: "Residential",
      minAmount: 50000,
      maxDiscount: 10000,
      usedCount: 12,
      totalLimit: 50,
    },
    {
      id: 2,
      title: "New Client Welcome Offer",
      description: "First-time clients get flat $5,000 discount",
      discountType: "fixed",
      discountValue: 5000,
      code: "WELCOME5K",
      validFrom: "2026-01-01",
      validUntil: "2026-12-31",
      status: "active",
      category: "All Projects",
      minAmount: 100000,
      maxDiscount: 5000,
      usedCount: 22,
      totalLimit: 150,
    },
    {
      id: 3,
      title: "Commercial Mega Deal",
      description: "20% off on commercial construction contracts",
      discountType: "percentage",
      discountValue: 20,
      code: "MEGA20",
      validFrom: "2026-03-01",
      validUntil: "2026-05-31",
      status: "expired",
      category: "Commercial",
      minAmount: 200000,
      maxDiscount: 50000,
      usedCount: 30,
      totalLimit: 30,
    },
    {
      id: 4,
      title: "Renovation Boost Offer",
      description: "10% discount on renovation services",
      discountType: "percentage",
      discountValue: 10,
      code: "RENOV10",
      validFrom: "2026-02-01",
      validUntil: "2026-12-31",
      status: "active",
      category: "Renovation",
      minAmount: 25000,
      maxDiscount: 8000,
      usedCount: 19,
      totalLimit: 80,
    },
  ]);

  const [filterStatus, setFilterStatus] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [search, setSearch] = useState("");

  const formatMoney = (v) =>
    v.toLocaleString("en-US", { style: "currency", currency: "USD" });

  const getRealStatus = (o) => {
    const now = new Date();
    if (now < new Date(o.validFrom)) return "scheduled";
    if (now > new Date(o.validUntil)) return "expired";
    return o.status === "paused" ? "paused" : "active";
  };

  const filteredOffers = useMemo(() => {
    return offers.filter((o) => {
      const status = getRealStatus(o);
      return (
        (filterStatus === "all" || status === filterStatus) &&
        (filterCategory === "all" || o.category === filterCategory) &&
        (o.title.toLowerCase().includes(search.toLowerCase()) ||
          o.code.toLowerCase().includes(search.toLowerCase()))
      );
    });
  }, [offers, filterStatus, filterCategory, search]);

  return (
    <AdminLayout>
      <div className="flex flex-col min-h-screen gap-6 px-3 sm:px-6 lg:px-8 py-4">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
              Offers & Promotions
            </h1>
            <p className="text-sm sm:text-base text-slate-500">
              Manage discount campaigns and promotions
            </p>
          </div>

          <button className="w-full sm:w-auto rounded-lg bg-amber-500 px-5 py-3 font-semibold text-white hover:bg-amber-600 transition">
            Create New Offer
          </button>
        </div>

        {/* SEARCH + FILTER */}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title or code..."
            className="flex-1 rounded-lg border px-4 py-3 outline-none focus:border-amber-500"
          />

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="rounded-lg border px-4 py-3"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="scheduled">Scheduled</option>
            <option value="expired">Expired</option>
          </select>

          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="rounded-lg border px-4 py-3"
          >
            <option value="all">All Categories</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Renovation">Renovation</option>
            <option value="All Projects">All Projects</option>
          </select>
        </div>

        {/* OFFERS LIST */}
        <div className="flex flex-col gap-4 overflow-auto">
          {filteredOffers.map((offer) => {
            const status = getRealStatus(offer);

            return (
              <div
                key={offer.id}
                className="bg-white rounded-xl p-4 sm:p-6 shadow hover:shadow-lg transition flex flex-col lg:flex-row gap-4 border-l-4 border-amber-500"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-bold text-base sm:text-lg text-slate-800">
                      {offer.title}
                    </h3>
                    <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-md text-xs font-semibold capitalize">
                      {status}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-slate-500 mb-3">
                    {offer.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm text-slate-700">
                    <div>
                      Discount:{" "}
                      <b>
                        {offer.discountType === "percentage"
                          ? `${offer.discountValue}%`
                          : formatMoney(offer.discountValue)}
                      </b>
                    </div>
                    <div>
                      Code: <b>{offer.code}</b>
                    </div>
                    <div>
                      Min: <b>{formatMoney(offer.minAmount)}</b>
                    </div>
                    <div>
                      Max: <b>{formatMoney(offer.maxDiscount)}</b>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {filteredOffers.length === 0 && (
            <div className="bg-white p-10 rounded-xl text-center text-slate-500">
              No offers found
            </div>
          )}
        </div>

      </div>
    </AdminLayout>
  );
};

export default AdminOffers;
