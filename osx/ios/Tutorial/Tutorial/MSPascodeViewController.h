//
//  MSPascodeViewController.h
//  Tutorial
//
//  Created by Miroslaw Dylag on 17/01/2014.
//  Copyright (c) 2014 Miroslaw Dylag. All rights reserved.
//
//http://resources.infosecinstitute.com/ios-application-security-part-12-dumping-keychain-data/

#import <UIKit/UIKit.h>

extern NSString * const KEY_PASSCODE;

enum MSPasscodeMode {
    /**
     * Displays the passcode enter view, which the user has to enter the correct passcode
     */
    MSPasscodeModeEnter = 1,
    
    /**
     * Creates a new passcode. This allows the user to enter a new passcode then
     * imediately verify it.
     */
    MSPasscodeModeSet = 2,
    
    /**
     * Disables an existing passcode. This allows the user to disable the passcode lock by
     * entering the passcode
     */
    MSPasscodeModeDisabled = 3,
    
    /**
     * Changes an existing passcode. This allows the user to change the passcode by
     * entering the existing passcode, followed by a new passcode
     */
    MSPasscodeModeChange = 4
};
//typedef NSUInteger MSPasscodeMode;

@interface MSPascodeViewController : UITableViewController<UITextFieldDelegate>

    @property (weak, nonatomic) IBOutlet UITextField *passcodeField;
    @property (weak, nonatomic) IBOutlet UILabel *errorField;
    @property (nonatomic, assign) enum MSPasscodeMode mode;


@end
