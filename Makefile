start:
	npm start
start-web:
	./node_modules/.bin/webpack-dev-server --inline --mode development
start-android:
	export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_171.jdk/Contents/Home
	react-native run-android
start-ios:
	react-native run-ios