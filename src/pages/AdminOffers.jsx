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

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700 border-green-200";
      case "scheduled":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "expired":
        return "bg-red-100 text-red-700 border-red-200";
      case "paused":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
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

  // Calculate stats
  const stats = useMemo(() => {
    const active = offers.filter((o) => getRealStatus(o) === "active").length;
    const totalUsed = offers.reduce((sum, o) => sum + o.usedCount, 0);
    const avgDiscount =
      offers.reduce((sum, o) => {
        return (
          sum +
          (o.discountType === "percentage" ? o.discountValue : 0)
        );
      }, 0) / offers.filter((o) => o.discountType === "percentage").length;

    return {
      activeOffers: active,
      totalRedemptions: totalUsed,
      avgDiscount: avgDiscount.toFixed(1),
      scheduledOffers: offers.filter((o) => getRealStatus(o) === "scheduled")
        .length,
    };
  }, [offers]);

  return (
    <AdminLayout>
      {/* Main Content */}
      <main className="bg-white lg:ml-64 pt-16 lg:pt-8 px-4 !important sm:px-6 !important lg:px-8 !important pb-10 !important">
        {/* Header */}
        <div className="mb-8 !important">
          <h1 className="text-3xl !important sm:text-4xl !important font-bold text-gray-900 mb-2 !important">
            Offers & Promotions
          </h1>
          <p className="text-gray-600">
            Manage discount campaigns and promotional codes
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 !important sm:grid-cols-2 !important lg:grid-cols-4 !important gap-6 !important mb-8 !important">
          {/* Active Offers */}
          <div className="bg-white rounded-2xl p-6 !important shadow-lg shadow-rose-500/5 border border-rose-100 hover:shadow-xl hover:shadow-rose-500/10 transition-all group">
            <div className="flex items-center justify-between mb-4 !important">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center shadow-lg shadow-rose-500/30 group-hover:scale-110 transition-transform">
                <i className="ri-price-tag-3-line text-white text-2xl"></i>
              </div>
              <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                Live now
              </span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1 !important">
              Active Offers
            </h3>
            <p className="text-3xl font-bold text-gray-900">
              {stats.activeOffers}
            </p>
            <p className="text-xs text-gray-500 mt-2 !important">
              {stats.scheduledOffers} scheduled
            </p>
          </div>

          {/* Total Redemptions */}
          <div className="bg-white rounded-2xl p-6 !important shadow-lg shadow-pink-500/5 border border-pink-100 hover:shadow-xl hover:shadow-pink-500/10 transition-all group">
            <div className="flex items-center justify-between mb-4 !important">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-lg shadow-pink-500/30 group-hover:scale-110 transition-transform">
                <i className="ri-ticket-line text-white text-2xl"></i>
              </div>
              <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                +15% today
              </span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1 !important">
              Total Redemptions
            </h3>
            <p className="text-3xl font-bold text-gray-900">
              {stats.totalRedemptions}
            </p>
            <p className="text-xs text-gray-500 mt-2 !important">All time usage</p>
          </div>

          {/* Average Discount */}
          <div className="bg-white rounded-2xl p-6 !important shadow-lg shadow-purple-500/5 border border-purple-100 hover:shadow-xl hover:shadow-purple-500/10 transition-all group">
            <div className="flex items-center justify-between mb-4 !important">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
                <i className="ri-percent-line text-white text-2xl"></i>
              </div>
              <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                Percentage
              </span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1 !important">
              Avg. Discount
            </h3>
            <p className="text-3xl font-bold text-gray-900">
              {stats.avgDiscount}%
            </p>
            <p className="text-xs text-gray-500 mt-2 !important">
              Across all offers
            </p>
          </div>

          {/* Total Offers */}
          <div className="bg-white rounded-2xl p-6 !important shadow-lg shadow-blue-500/5 border border-blue-100 hover:shadow-xl hover:shadow-blue-500/10 transition-all group">
            <div className="flex items-center justify-between mb-4 !important">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                <i className="ri-coupon-line text-white text-2xl"></i>
              </div>
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                All time
              </span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1 !important">
              Total Offers
            </h3>
            <p className="text-3xl font-bold text-gray-900">{offers.length}</p>
            <p className="text-xs text-gray-500 mt-2 !important">
              {offers.filter((o) => getRealStatus(o) === "expired").length}{" "}
              expired
            </p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 !important mb-6 !important">
          <div className="flex flex-col !important sm:flex-row !important gap-4 !important">
            <div className="flex-1 relative">
              <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl"></i>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by title or code..."
                className="w-full pl-12 pr-4 py-3 !important rounded-xl border border-gray-200 outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition-all"
              />
            </div>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-3 !important rounded-xl border border-gray-200 outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition-all bg-white"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="scheduled">Scheduled</option>
              <option value="expired">Expired</option>
              <option value="paused">Paused</option>
            </select>

            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-4 py-3 !important rounded-xl border border-gray-200 outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition-all bg-white"
            >
              <option value="all">All Categories</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Renovation">Renovation</option>
              <option value="All Projects">All Projects</option>
            </select>

            <button className="px-6 py-3 !important bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-xl hover:from-rose-600 hover:to-pink-600 transition-all shadow-lg shadow-rose-500/30 flex items-center gap-2 justify-center whitespace-nowrap">
              <i className="ri-add-line text-xl"></i>
              <span className="hidden sm:inline">Create Offer</span>
              <span className="sm:hidden">New</span>
            </button>
          </div>
        </div>

        {/* Offers List */}
        <div className="space-y-4 !important">
          {filteredOffers.map((offer) => {
            const status = getRealStatus(offer);
            const usagePercent = (offer.usedCount / offer.totalLimit) * 100;

            return (
              <div
                key={offer.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className="p-6 !important">
                  <div className="flex flex-col !important lg:flex-row !important lg:items-center !important justify-between gap-4 !important mb-4 !important">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 !important mb-2 !important">
                        <h3 className="font-bold text-lg !important sm:text-xl !important text-gray-900">
                          {offer.title}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
                            status
                          )}`}
                        >
                          {status.charAt(0).toUpperCase() + status.slice(1)}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200">
                          {offer.category}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm !important sm:text-base !important">
                        {offer.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 !important">
                      <button className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100 transition-all flex items-center justify-center">
                        <i className="ri-edit-line text-lg"></i>
                      </button>
                      <button className="w-10 h-10 rounded-lg bg-gray-50 text-gray-600 hover:bg-gray-100 transition-all flex items-center justify-center">
                        <i className="ri-more-2-fill text-lg"></i>
                      </button>
                    </div>
                  </div>

                  {/* Offer Details Grid */}
                  <div className="grid grid-cols-1 !important sm:grid-cols-2 !important lg:grid-cols-4 !important gap-4 !important mb-4 !important">
                    <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-4 !important border border-rose-100">
                      <div className="flex items-center gap-2 !important mb-1 !important">
                        <i className="ri-discount-percent-line text-rose-600"></i>
                        <span className="text-xs text-gray-600 font-medium">
                          Discount
                        </span>
                      </div>
                      <p className="text-lg !important sm:text-xl !important font-bold text-gray-900">
                        {offer.discountType === "percentage"
                          ? `${offer.discountValue}%`
                          : formatMoney(offer.discountValue)}
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 !important border border-purple-100">
                      <div className="flex items-center gap-2 !important mb-1 !important">
                        <i className="ri-code-box-line text-purple-600"></i>
                        <span className="text-xs text-gray-600 font-medium">
                          Promo Code
                        </span>
                      </div>
                      <p className="text-lg !important sm:text-xl !important font-bold text-gray-900 font-mono">
                        {offer.code}
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 !important border border-blue-100">
                      <div className="flex items-center gap-2 !important mb-1 !important">
                        <i className="ri-money-dollar-circle-line text-blue-600"></i>
                        <span className="text-xs text-gray-600 font-medium">
                          Min Amount
                        </span>
                      </div>
                      <p className="text-lg !important sm:text-xl !important font-bold text-gray-900">
                        {formatMoney(offer.minAmount)}
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 !important border border-green-100">
                      <div className="flex items-center gap-2 !important mb-1 !important">
                        <i className="ri-price-tag-3-line text-green-600"></i>
                        <span className="text-xs text-gray-600 font-medium">
                          Max Discount
                        </span>
                      </div>
                      <p className="text-lg !important sm:text-xl !important font-bold text-gray-900">
                        {formatMoney(offer.maxDiscount)}
                      </p>
                    </div>
                  </div>

                  {/* Usage Stats */}
                  <div className="bg-gray-50 rounded-xl p-4 !important">
                    <div className="flex items-center justify-between mb-2 !important">
                      <span className="text-sm font-medium text-gray-700">
                        Usage Progress
                      </span>
                      <span className="text-sm font-bold text-gray-900">
                        {offer.usedCount} / {offer.totalLimit}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-rose-500 to-pink-500 rounded-full transition-all duration-500"
                        style={{ width: `${Math.min(usagePercent, 100)}%` }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-between mt-2 !important text-xs text-gray-600">
                      <span className="flex items-center gap-1">
                        <i className="ri-calendar-line text-rose-500"></i>
                        Valid: {new Date(offer.validFrom).toLocaleDateString()} -{" "}
                        {new Date(offer.validUntil).toLocaleDateString()}
                      </span>
                      <span className="font-semibold">
                        {usagePercent.toFixed(1)}% used
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {filteredOffers.length === 0 && (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 !important text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center mx-auto mb-4 !important">
                <i className="ri-coupon-line text-rose-600 text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 !important">
                No offers found
              </h3>
              <p className="text-gray-600 mb-6 !important">
                Try adjusting your filters or create a new offer
              </p>
              <button className="px-6 py-3 !important bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-xl hover:from-rose-600 hover:to-pink-600 transition-all shadow-lg shadow-rose-500/30">
                Create New Offer
              </button>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="mt-6 !important grid grid-cols-1 !important sm:grid-cols-2 !important lg:grid-cols-4 !important gap-4 !important">
          <button className="p-4 !important bg-white rounded-xl border-2 border-rose-200 hover:border-rose-500 hover:bg-rose-50 transition-all group flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <i className="ri-add-line text-white text-2xl"></i>
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-900">New Offer</p>
              <p className="text-xs text-gray-600">Create promotion</p>
            </div>
          </button>

          <button className="p-4 !important bg-white rounded-xl border-2 border-purple-200 hover:border-purple-500 hover:bg-purple-50 transition-all group flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <i className="ri-file-chart-line text-white text-2xl"></i>
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-900">Analytics</p>
              <p className="text-xs text-gray-600">View reports</p>
            </div>
          </button>

          <button className="p-4 !important bg-white rounded-xl border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-50 transition-all group flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <i className="ri-download-line text-white text-2xl"></i>
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-900">Export Data</p>
              <p className="text-xs text-gray-600">Download CSV</p>
            </div>
          </button>

          <button className="p-4 !important bg-white rounded-xl border-2 border-green-200 hover:border-green-500 hover:bg-green-50 transition-all group flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <i className="ri-settings-3-line text-white text-2xl"></i>
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-900">Settings</p>
              <p className="text-xs text-gray-600">Configure</p>
            </div>
          </button>
        </div>
      </main>
    </AdminLayout>
  );
};

export default AdminOffers;