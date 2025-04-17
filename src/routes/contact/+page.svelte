
<script>
    let {data, form} = $props();
 </script>




<div class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
        <div class="text-center mb-12">
            <h1 class="text-4xl font-bold text-white mb-4">
                <span class="text-orange-500">Get</span> in Touch
            </h1>
            <p class="text-gray-400 text-lg">Let's discuss your next project or opportunity</p>
        </div>

        <form class="space-y-8 bg-gray-800/30 p-8 rounded-xl backdrop-blur-sm shadow-2xl border border-orange-500/20">
            <!-- Personal Information -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label for="firstName" class="block text-sm font-medium text-orange-500 mb-2">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white placeholder-gray-400 transition duration-200"
                        placeholder="John"
                    />
                </div>
                <div>
                    <label for="lastName" class="block text-sm font-medium text-orange-500 mb-2">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white placeholder-gray-400 transition duration-200"
                        placeholder="Doe"
                    />
                </div>
            </div>

            <!-- Contact Information -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label for="email" class="block text-sm font-medium text-orange-500 mb-2">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white placeholder-gray-400 transition duration-200"
                        placeholder="john@example.com"
                    />
                </div>
                <div>
                    <label for="phone" class="block text-sm font-medium text-orange-500 mb-2">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white placeholder-gray-400 transition duration-200"
                        placeholder="+1 (555) 000-0000"
                    />
                </div>
            </div>

            <!-- Subject -->
            <div>
                <label for="subject" class="block text-sm font-medium text-orange-500 mb-2">Subject</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white placeholder-gray-400 transition duration-200"
                    placeholder="What's this about?"
                />
            </div>

            <!-- Message -->
            <div>
                <label for="message" class="block text-sm font-medium text-orange-500 mb-2">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows="6"
                    class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white placeholder-gray-400 transition duration-200 resize-none"
                    placeholder="Tell me about your project..."
                ></textarea>
            </div>

            <!-- Submit Button -->
            <div class="text-center">
                <button
                    type="submit"
                    class="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-200 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
                >
                    Send Message
                </button>
            </div>
        </form>

        <!-- Additional Contact Information -->
        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div class="p-6 bg-gray-800/30 rounded-lg backdrop-blur-sm border border-orange-500/20 hover:border-orange-500/40 transition duration-300">
                <div class="text-orange-500 text-2xl mb-2">📍</div>
                <h3 class="text-orange-500 font-medium mb-1">Location</h3>
                <p class="text-gray-300">Shkoder, Albania</p>
            </div>
            <div class="p-6 bg-gray-800/30 rounded-lg backdrop-blur-sm border border-orange-500/20 hover:border-orange-500/40 transition duration-300">
                <div class="text-orange-500 text-2xl mb-2">📧</div>
                <h3 class="text-orange-500 font-medium mb-1">Email</h3>
                <p class="text-gray-300">ErgBeq21@htl-shkoder.com</p>
            </div>
            <div class="p-6 bg-gray-800/30 rounded-lg backdrop-blur-sm border border-orange-500/20 hover:border-orange-500/40 transition duration-300">
                <div class="text-orange-500 text-2xl mb-2">📱</div>
                <h3 class="text-orange-500 font-medium mb-1">Phone</h3>
                <p class="text-gray-300">+355 69 542 3977</p>
            </div>
        </div>
    </div>
</div>