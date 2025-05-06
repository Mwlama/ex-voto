import React, { useState } from 'react';
import { Package, DollarSign, ShoppingBag, Users, TrendingUp, Settings, Plus, Bell, ChevronDown, Search, Filter, Download, MessageSquare, Tag, Box, Truck } from 'lucide-react';

const SellerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTimeRange, setSelectedTimeRange] = useState('7');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'orders':
        return (
          <div className="space-y-6">
            {/* Orders tab content */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search orders..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500 w-64"
                  />
                </div>
                <select className="border border-gray-300 rounded-md text-sm p-2">
                  <option value="all">All Orders</option>
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <Download className="h-5 w-5" />
                Export Orders
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-medium">Recent Orders</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Order ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Customer
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Product
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      { id: '1234', customer: 'John Doe', product: 'Silver Ex-voto Heart', amount: 129.99, status: 'completed' },
                      { id: '1235', customer: 'Jane Smith', product: 'Bronze Miracle Token', amount: 159.99, status: 'processing' },
                      { id: '1236', customer: 'Mike Johnson', product: 'Custom Wood Ex-voto', amount: 89.99, status: 'shipped' },
                    ].map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#{order.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                              {order.customer.charAt(0)}
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium text-gray-900">{order.customer}</p>
                              <p className="text-sm text-gray-500">customer@example.com</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.product}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${order.amount}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                            ${order.status === 'completed' ? 'bg-green-100 text-green-800' :
                              order.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-blue-100 text-blue-800'}`}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center gap-3">
                            <button className="text-gray-600 hover:text-gray-900">
                              <MessageSquare className="h-5 w-5" />
                            </button>
                            <button className="text-rose-600 hover:text-rose-700">View Details</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      
      case 'products':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500 w-64"
                  />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                  <Filter className="h-5 w-5" />
                  Filters
                </button>
              </div>
              <button className="bg-rose-600 text-white px-4 py-2 rounded-md hover:bg-rose-700 flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Add New Product
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: 1,
                  name: 'Silver Ex-voto Heart',
                  price: 129.99,
                  stock: 15,
                  image: 'https://images.unsplash.com/photo-1544207916-df3e8943d737',
                  sales: 42
                },
                {
                  id: 2,
                  name: 'Bronze Miracle Token',
                  price: 159.99,
                  stock: 8,
                  image: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57',
                  sales: 28
                },
                {
                  id: 3,
                  name: 'Custom Wood Ex-voto',
                  price: 89.99,
                  stock: 23,
                  image: 'https://images.unsplash.com/photo-1579541671172-43429ce17aca',
                  sales: 35
                }
              ].map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                      <span className="text-lg font-semibold text-gray-900">${product.price}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Box className="h-4 w-4" />
                        <span>Stock: {product.stock}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Tag className="h-4 w-4" />
                        <span>Sales: {product.sales}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end gap-2">
                      <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
                        Edit
                      </button>
                      <button className="px-3 py-1 text-sm bg-rose-600 text-white rounded hover:bg-rose-700">
                        Manage
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Total Revenue</p>
                    <p className="text-2xl font-bold">$3,246.89</p>
                    <p className="text-sm text-green-600">+18.4% from last week</p>
                  </div>
                  <div className="bg-rose-100 p-3 rounded-full">
                    <DollarSign className="h-8 w-8 text-rose-600" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Total Orders</p>
                    <p className="text-2xl font-bold">156</p>
                    <p className="text-sm text-green-600">+12.5% from last week</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full">
                    <ShoppingBag className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Avg. Order Value</p>
                    <p className="text-2xl font-bold">$142.35</p>
                    <p className="text-sm text-green-600">+8.2% from last week</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-full">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Conversion Rate</p>
                    <p className="text-2xl font-bold">3.6%</p>
                    <p className="text-sm text-green-600">+0.8% from last week</p>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Sales Trend</h3>
                  <select 
                    value={selectedTimeRange}
                    onChange={(e) => setSelectedTimeRange(e.target.value)}
                    className="border border-gray-300 rounded-md text-sm p-2"
                  >
                    <option value="7">Last 7 days</option>
                    <option value="30">Last 30 days</option>
                    <option value="90">Last 90 days</option>
                    <option value="365">Last 12 months</option>
                  </select>
                </div>
                <div className="h-64 flex items-center justify-center text-gray-500">
                  <TrendingUp className="h-8 w-8 mr-2" />
                  Sales trend chart will be implemented here
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Top Products</h3>
                  <button className="text-sm text-rose-600 hover:text-rose-700">View All</button>
                </div>
                <div className="space-y-4">
                  {[
                    { name: 'Silver Ex-voto Heart', sales: 42, revenue: 5458.58 },
                    { name: 'Bronze Miracle Token', sales: 28, revenue: 4479.72 },
                    { name: 'Custom Wood Ex-voto', sales: 35, revenue: 3149.65 }
                  ].map((product, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <span className="text-lg font-semibold text-gray-500">#{index + 1}</span>
                        <div>
                          <p className="font-medium text-gray-900">{product.name}</p>
                          <p className="text-sm text-gray-500">{product.sales} sales</p>
                        </div>
                      </div>
                      <p className="font-semibold text-gray-900">${product.revenue.toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Shipping Performance</h3>
                <button className="text-gray-500 hover:text-gray-600">
                  <Settings className="h-5 w-5" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Truck className="h-5 w-5 text-green-600" />
                    <h4 className="font-medium">On-Time Delivery</h4>
                  </div>
                  <p className="text-2xl font-semibold">94.8%</p>
                  <p className="text-sm text-green-600">+2.4% from last month</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Box className="h-5 w-5 text-blue-600" />
                    <h4 className="font-medium">Average Processing Time</h4>
                  </div>
                  <p className="text-2xl font-semibold">1.8 days</p>
                  <p className="text-sm text-green-600">-0.3 days from last month</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <MessageSquare className="h-5 w-5 text-purple-600" />
                    <h4 className="font-medium">Customer Satisfaction</h4>
                  </div>
                  <p className="text-2xl font-semibold">4.9/5.0</p>
                  <p className="text-sm text-green-600">+0.2 from last month</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Total Sales</p>
                    <p className="text-2xl font-bold">$1,234</p>
                    <p className="text-sm text-green-600">+12.5% from last month</p>
                  </div>
                  <div className="bg-rose-100 p-3 rounded-full">
                    <DollarSign className="h-8 w-8 text-rose-600" />
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Orders</p>
                    <p className="text-2xl font-bold">25</p>
                    <p className="text-sm text-green-600">4 new today</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full">
                    <ShoppingBag className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Products</p>
                    <p className="text-2xl font-bold">48</p>
                    <p className="text-sm text-amber-600">2 low in stock</p>
                  </div>
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Package className="h-8 w-8 text-amber-600" />
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Visitors</p>
                    <p className="text-2xl font-bold">1,502</p>
                    <p className="text-sm text-green-600">+8.2% this week</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-full">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-medium">Recent Orders</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {[
                      { id: '1234', customer: 'John Doe', product: 'Silver Ex-voto Heart', amount: 129.99, status: 'completed' },
                      { id: '1235', customer: 'Jane Smith', product: 'Bronze Miracle Token', amount: 159.99, status: 'processing' },
                      { id: '1236', customer: 'Mike Johnson', product: 'Custom Wood Ex-voto', amount: 89.99, status: 'shipped' },
                    ].map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{order.product}</p>
                          <p className="text-sm text-gray-500">by {order.customer}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">${order.amount}</p>
                          <span className={`text-xs font-medium px-2 py-1 rounded-full
                            ${order.status === 'completed' ? 'bg-green-100 text-green-800' :
                              order.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-blue-100 text-blue-800'}`}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <button className="text-sm text-rose-600 hover:text-rose-700">View All Orders</button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-medium">Low Stock Alert</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {[
                      { name: 'Bronze Miracle Token', stock: 3, threshold: 5 },
                      { name: 'Silver Ex-voto Heart', stock: 4, threshold: 5 },
                    ].map((product, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{product.name}</p>
                          <p className="text-sm text-gray-500">
                            {product.stock} items left
                          </p>
                        </div>
                        <button className="px-3 py-1 text-sm bg-rose-600 text-white rounded hover:bg-rose-700">
                          Restock
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Quick Actions</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="p-4 text-center bg-gray-50 rounded-lg hover:bg-gray-100">
                  <Plus className="h-6 w-6 mx-auto mb-2 text-rose-600" />
                  <span className="text-sm font-medium">Add Product</span>
                </button>
                <button className="p-4 text-center bg-gray-50 rounded-lg hover:bg-gray-100">
                  <Tag className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                  <span className="text-sm font-medium">Create Discount</span>
                </button>
                <button className="p-4 text-center bg-gray-50 rounded-lg hover:bg-gray-100">
                  <MessageSquare className="h-6 w-6 mx-auto mb-2 text-green-600" />
                  <span className="text-sm font-medium">Customer Messages</span>
                </button>
                <button className="p-4 text-center bg-gray-50 rounded-lg hover:bg-gray-100">
                  <Settings className="h-6 w-6 mx-auto mb-2 text-purple-600" />
                  <span className="text-sm font-medium">Shop Settings</span>
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Seller Dashboard</h1>
          <p className="text-gray-500">Welcome back, ArtisanCrafts</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-gray-400 hover:text-gray-500">
            <Bell className="h-6 w-6" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white" />
          </button>
          <button className="bg-rose-600 text-white px-4 py-2 rounded-md hover:bg-rose-700 flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Add New Product
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8">
          {['overview', 'orders', 'products', 'analytics', 'settings'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm
                ${activeTab === tab 
                  ? 'border-rose-500 text-rose-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
              `}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};

export default SellerDashboard;