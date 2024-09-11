#import "Course.h"

// UITableViewController
// This is a specialized view controller class provided by UIKit.
// It's designed to manage a table view, which is a common UI element in iOS apps for displaying lists of data.
// By inheriting from UITableViewController, your ViewController automatically gets a table view and methods to manage it.
@interface ViewController : UITableViewController

// not NSArray!
@property (strong, nonatomic) NSMutableArray<Course *> *courses;

@end