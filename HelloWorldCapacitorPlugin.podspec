
  Pod::Spec.new do |s|
    s.name = 'HelloWorldCapacitorPlugin'
    s.version = '0.0.1'
    s.summary = 'Says Hello World'
    s.license = 'MIT'
    s.homepage = 'https://github.com/sebastienguillon/com.sebastienguillon.capacitor.plugin.helloworld.git'
    s.author = 'Sébastien Guillon'
    s.source = { :git => 'https://github.com/sebastienguillon/com.sebastienguillon.capacitor.plugin.helloworld.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end