#import <UIKit/UIKit.h>
#import <ViewController.h>

@interface AppDelegate : UIResponder <UIApplicationDelegate>
@end

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application 
    didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {

        self.window = UIWindow.new;
        [self.window makeKeyAndVisible];


        // create new ints by alloc
        self.window.rootViewController = [[UINavigationController alloc] 
                                            initWithRootViewController:ViewController.new]

        return YES;
}

- (void)applicationWillResignActive:(UIApplication *)application;

- (void)applicationDidEnterBackground:(UIApplication *)application;

- (void)applicationWillEnterForeground:(UIApplication *)application;

- (void)applicationDidBecomeActive:(UIApplication *)application;

- (void)applicationWillTerminate:(UIApplication *)application;

- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo;

- (void)applicationDidReceiveMemoryWarning:(UIApplication *)application;

@end

