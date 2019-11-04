const config = require('./config')

module.exports = {
		/**
		 * Application configuration section
		 * http://pm2.keymetrics.io/docs/usage/application-declaration/
		 */
		apps: [{
			name: config.proName, //应用名称
			max_memory_restart: "300M", //服务占用的内存超过设定的数值，会自动进行重启。
			script: "./bin/www", //实际应用启动脚本文件所在路径
			instances: 1, //启用实例个数，仅在cluster模式有效
			exec_mode: "fork", //启动模式 cluster：集群 fork:单例(默认)
			watch: true, //是否监听文件更新重启服务
			restart_delay: 5000, //服务重启间隔
			merge_logs: true, //合并日志文件
			error_file: `./logs/${config.proName}-err.log`, //错误日志文件路径
			out_file: `./logs/${config.proName}-out.log`, //输出日志文件路径
			log_date_format: "YYYY-MM-DD HH:mm Z" //输出日志日期格式化
		}]
}
